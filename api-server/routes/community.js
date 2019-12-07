const createError = require("http-errors");
const express = require("express");
const router = express.Router();

const Community = require("../models/community");
const User = require("../models/user");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router
  .route("/")
  .get(getAllCommunities)
  .post(checkSession, createCommunity);

router
  .route("/:communityId")
  .get(getCommunity)
  .delete(checkSession, deleteCommunity);

router
  .route("/:communityId/edit/:key")
  .put(checkSession, updateCommunityDetails);

router
  .route("/:communityId/users/:key")
  .get(checkSession, getCommunityUsers)
  .post(checkSession, addCommunityUser)
  .delete(checkSession, deleteCommunityUser);

// ===== FUNCTIONS ===== //

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
    const { name, description, rules, communitiesRelated, userId } = req.body;
    // create new community
    const partialCommunity = await new Community({
      name,
      description,
      rules,
      communitiesRelated
    });
    partialCommunity.users.administrators.push(userId);
    const newCommunity = await partialCommunity.save();
    // add community to user document
    const user = res.locals.user;
    user.communities.administrators.push(userId);
    await user.save();
    const { password, ...goodUser } = user._doc;
    res.status(201).json({ newCommunity, updatedUser: goodUser });
  } catch (err) {
    next(err);
  }
}

async function getCommunity(req, res, next) {
  try {
    const { communityId } = req.params;
    const community = await Community.findById(communityId);
    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
}

// SITE ADMIN - SECURE NEEDED
async function deleteCommunity(req, res, next) {
  try {
    const { communityId } = req.params;
    const deletedCommunity = await Community.findByIdAndDelete(communityId);
    res.status(200).json(deletedCommunity);
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
    const acceptableKeys = ["members", "moderators", "administrators"];
    if (!acceptableKeys.includes(key)) {
      throw createError(400, "Invalid key param");
    }
    const { users } = await Community.findById(communityId).populate({
      path: `users.${key}`,
      select: "username -_id"
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
    const acceptableKeys = ["members", "moderators", "administrators"];
    if (!acceptableKeys.includes(key)) {
      throw createError(400, "Invalid key param");
    }
    // update community document
    const community = await Community.findById(communityId);
    community.users[key].push(userId);
    const updatedCommunity = await community.save();
    // update user document
    const user = await User.findById(userId);
    // community's users are plural, user's are singular
    const singularKey = key.substring(0, key.length - 1);
    user.communities[singularKey].push(communityId);
    await user.save();
    res.status(200).json(updatedCommunity);
  } catch (err) {
    next(err);
  }
}

// VERIFICATION - SECURE NEEDED
async function deleteCommunityUser(req, res, next) {
  try {
    const { communityId, key } = req.params;
    const { userId } = req.body;
    const acceptableKeys = ["members", "moderators", "administrators"];
    if (!acceptableKeys.includes(key)) {
      throw createError(400, "Invalid key param");
    }
    // update community document
    const community = await Community.findByIdAndUpdate(
      communityId,
      {
        users: { $pull: { [key]: userId } }
      },
      { new: true }
    );
    const updatedCommunity = await community.save();
    // update user document
    const singularKey = key.substring(0, key.length - 1);
    const user = await User.findByIdAndUpdate(
      userId,
      {
        communities: { $pull: { [singularKey]: userId } }
      },
      { new: true }
    );
    await user.save();
    res.status(200).json(updatedCommunity);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
