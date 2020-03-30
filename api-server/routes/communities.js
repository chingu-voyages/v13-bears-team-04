const createError = require("http-errors");
const router = require("express").Router();
const { Community, Topic, Vote } = require("../models");
const { verifyToken } = require("../middleware");
const { groupBy } = require("../utils/groupBy");

// ===== ROUTES ===== //

router.get("/", getAllCommunities);
router.post("/", verifyToken, createCommunity);
router.get("/:communityName", getCommunity);
router.delete("/:communityId", verifyToken, deleteCommunity);
router.put("/:communityId/theme", verifyToken, updateCommunityTheme);
router.put("/:communityId/edit/:key", verifyToken, updateCommunityDetails);
router.get("/:communityId/users/:key", verifyToken, getCommunityUsers);
router.post("/:communityId/users/:key", verifyToken, addCommunityUser);
router.delete("/:communityId/users/:key", verifyToken, deleteCommunityUser);

// ===== CONTROLLERS ===== //

async function getAllCommunities(req, res, next) {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (err) {
    next(err);
  }
}

async function createCommunity(req, res, next) {
  try {
    const {
      name,
      topics,
      description,
      communityType,
      isOver18,
      userId,
    } = req.body;

    // create new community
    const newCommunity = await new Community({
      name,
      topics,
      description,
      communityType,
      isOver18,
    });
    newCommunity.users.administrators.push(userId);
    await newCommunity.save();

    // add community id to topics
    const topicUpdater = topics.map(topicId => ({
      updateOne: {
        filter: { _id: topicId },
        update: { $push: { communities: newCommunity._id } },
      },
    }));
    await Topic.bulkWrite(topicUpdater);

    // add community to user document
    const { user } = res.locals;
    user.communities.administrator.push(newCommunity._id);
    await user.save();

    const { password, ...goodUser } = user._doc;

    res.status(201).json({ newCommunity, updatedUser: goodUser });
  } catch (err) {
    next(err);
  }
}

async function getCommunity(req, res, next) {
  try {
    const { communityName } = req.params;
    const lowerName = communityName.toLowerCase();

    const community = await Community.findOne({ lowerName })
      .populate({
        path: "posts",
        populate: {
          path: "author",
          select: "username -_id",
        },
      })
      .lean();

    const postId = community.posts.map(({ _id }) => _id);

    const allPostVotes = await Vote.find({
      isOnPost: true,
      postId: { $in: postId },
    }).lean();

    const votesByPosts = groupBy(allPostVotes, "postId");

    const posts = community.posts.map(({ comments, ...post }) => ({
      ...post,
      numOfComments: comments.length,
      votes: votesByPosts[post._id] || [],
    }));

    res.status(200).json({ ...community, posts });
  } catch (err) {
    next(err);
  }
}

// SITE ADMIN - SECURE NEEDED
async function deleteCommunity(req, res, next) {
  try {
    const { communityId } = req.params;
    const deleteCommunity = await Community.findByIdAndDelete(communityId);
    res.status(200).json(deleteCommunity);
  } catch (err) {
    next(err);
  }
}

async function updateCommunityTheme(req, res, next) {
  try {
    const { communityId } = req.params;
    const theme = req.body.theme;

    const community = await Community.findById(communityId);
    community.theme = theme;
    await community.save();

    res.status(200).json({ updatedCommunity: community });
  } catch (err) {
    next(err);
  }
}

// ADMIN - SECURE NEEDED
async function updateCommunityDetails(req, res, next) {
  try {
    const { communityId, key } = req.params;

    const acceptableKeys = ["name", "description", "rules"];
    if (!acceptableKeys.includes(key)) {
      throw createError(400, "Invalid key param");
    }

    const updatedCommunity = await Community.findByIdAndUpdate(
      communityId,
      { [key]: req.body[key] },
      { new: true }
    );

    res.status(200).json(updatedCommunity);
  } catch (err) {
    next(err);
  }
}

// VERIFICATION - SECURE NEEDED
async function getCommunityUsers(req, res, next) {
  try {
    const { communityId, key } = req.params;
    checkKeyParam(key);

    const { users } = await Community.findById(communityId).populate({
      path: `users.${key}`,
      select: "username -_id",
    });
    const targetedUsers = users[key];

    res.status(200).json(targetedUsers);
  } catch (err) {
    next(err);
  }
}

// ADMIN - SECURE NEEDED
async function addCommunityUser(req, res, next) {
  try {
    const { communityId, key } = req.params;
    const user = res.locals.user;

    const singularKey = checkKeyParam(key);

    // update community document
    const community = await Community.findById(communityId);
    community.users[key].push(user._id);
    await community.save();

    // update user document
    user.communities[singularKey].push(communityId);
    await user.save();
    const { password, lowerUsername, ...goodUser } = user._doc;

    res.status(200).json(goodUser);
  } catch (err) {
    next(err);
  }
}

// VERIFICATION - SECURE NEEDED
async function deleteCommunityUser(req, res, next) {
  try {
    const { communityId, key } = req.params;
    const user = res.locals.user;

    const singularKey = checkKeyParam(key);

    // update community document
    const community = await Community.findById(communityId);
    community.users[key] = community.users[key].filter(
      user => user.toString() !== user._id
    );
    await community.save();

    // update user document
    user.communities[singularKey] = user.communities[singularKey].filter(
      community => community.toString() !== communityId
    );
    await user.save();
    const { password, lowerUsername, ...goodUser } = user._doc;

    res.status(200).json(goodUser);
  } catch (err) {
    next(err);
  }
}

module.exports = router;

// check if key param is correct, throws if not
// changes plural key to singular key string, returns singular version
function checkKeyParam(key) {
  const acceptableKeys = ["members", "moderators", "administrators"];
  if (!acceptableKeys.includes(key)) {
    throw createError(
      400,
      "Invalid Key - must be one of [members, moderators, administrators]"
    );
  }
  return key.substring(0, key.length - 1);
}
