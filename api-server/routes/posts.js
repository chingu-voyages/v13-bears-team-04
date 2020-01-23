const createError = require("http-errors");
const express = require("express");
const router = express.Router();

const Post = require("../models/post");
const Community = require("../models/community");
const User = require("../models/user");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router.route("/").get(getAllPosts);

router
  .route("/:communityId")
  .get(getCommunityPosts)
  .post(checkSession, createPost);

// ===== FUNCTIONS ===== //

async function getAllPosts(_, res, next) {
  try {
    const posts = await Post.find()
      .populate({
        path: "author",
        select: "username -_id"
      })
      .populate({
        path: "community",
        select: "name -_id"
      });
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

async function getCommunityPosts(req, res, next) {
  try {
    const { communityId } = req.params;
    const posts = await Post.find({ community: communityId })
      .populate({
        path: "author",
        select: "username -_id"
      })
      .populate({
        path: "community",
        select: "name -_id"
      });
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

async function createPost(req, res, next) {
  try {
    const { community, author } = req.body;
    const newPost = await Post.create(req.body);
    const postId = newPost._id;

    const targetCommunity = await Community.findById(community);
    targetCommunity.posts.push(postId);
    await targetCommunity.save();

    const targetUser = await User.findById(author);
    targetUser.posts.push(postId);
    await targetUser.save();

    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
