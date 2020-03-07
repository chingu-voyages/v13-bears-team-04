const createError = require("http-errors");
const router = require("express").Router();
const { Community, Topic } = require("../models");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router.get("/", getAllCommunities);
router.post("/", createCommunity);
router.get("/:communityName", getCommunity);
router.delete("/:communityId", checkSession, deleteCommunity);
router.put("/:communityId/theme", checkSession, updateCommunityTheme);
router.put("/:communityId/edit/:key", checkSession, updateCommunityDetails);
router.get("/:communityId/users/:key", checkSession, getCommunityUsers);
router.post("/:communityId/users/:key", checkSession, addCommunityUser);
router.delete("/:communityId/users/:key", checkSession, deleteCommunityUser);

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
    const partialCommunity = await new Community({
      name,
      topics,
      description,
      communityType,
      isOver18,
    });
    partialCommunity.users.administrators.push(userId);
    const newCommunity = await partialCommunity.save();

    // add community id to topics
    const topicUpdater = topics.map(topicId => ({
      updateOne: {
        filter: { _id: topicId },
        update: { $push: { communities: newCommunity._id } },
      },
    }));
    await Topic.bulkWrite(topicUpdater);

    // add community to user document
    const user = res.locals.user;
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
    const community = await Community.findOne({ lowerName });
    res.status(200).json(community);
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
    const { userId } = req.body;

    const singularKey = checkKeyParam(key);

    // update community document
    const community = await Community.findById(communityId);
    community.users[key].push(userId);
    await community.save();

    // update user document
    const user = res.locals.user;
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
    const { userId } = req.body;

    const singularKey = checkKeyParam(key);

    // update community document
    const community = await Community.findById(communityId);
    community.users[key] = community.users[key].filter(
      user => user.toString() !== userId
    );
    await community.save();

    // update user document
    const user = res.locals.user;
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
