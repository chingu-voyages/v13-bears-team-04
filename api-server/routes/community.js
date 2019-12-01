const express = require("express");
const router = express.Router();
const Community = require("../models/community");
const User = require("../models/user");

router
  .route("/")
  .get(getAllCommunities)
  .post(createCommunity);

router
  .route("/:communityId")
  .get(getCommunity)
  .delete(deleteCommunity);

router.route("/:communityId/edit/:key").put(editCommunityDetails);

router.route("/:communityId/users/:key").post(addCommunityUser);
// .put(updateCommunityUser)
// .delete(deleteCommunityUser);

async function getAllCommunities(req, res) {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// USER VERIFICATION NEEDED
async function createCommunity(req, res) {
  try {
    const { name, description, rules, communitiesRelated, userId } = req.body;
    const newCommunity = await new Community({
      name,
      description,
      rules,
      communitiesRelated
    });
    newCommunity.users.administrators.push(userId);
    const finishedCommunity = await newCommunity.save();
    res.status(201).json(finishedCommunity);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getCommunity(req, res) {
  try {
    const { communityId } = req.params;
    const community = await Community.findById(communityId);
    res.status(200).json(community);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// SITE ADMIN - SECURE NEEDED
async function deleteCommunity(req, res) {
  try {
    const { communityId } = req.params;
    const deletedCommunity = await Community.findByIdAndDelete(communityId);
    res.status(200).json(deletedCommunity);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// ADMIN - SECURE NEEDED
async function editCommunityDetails(req, res) {
  try {
    const { communityId, key } = req.params;
    const acceptableKeys = ["name", "description", "rules"];
    if (!acceptableKeys.includes(key)) {
      throw new Error("Unapproved key");
    }
    const updatedCommunity = await Community.findByIdAndUpdate(
      communityId,
      { [key]: req.body[key] },
      { new: true }
    );
    res.status(200).json(updatedCommunity);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// ADMIN - SECURE NEEDED
async function addCommunityUser(req, res) {
  try {
    const { communityId, key } = req.params;
    const { userId } = req.body;
    const acceptableKeys = ["members", "moderators", "administrators"];
    if (!acceptableKeys.includes(key)) {
      throw new Error("Unapproved key");
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
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = router;
