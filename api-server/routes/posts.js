const createError = require("http-errors");
const express = require("express");
const router = express.Router();

const Post = require("../models/post");
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
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

async function getCommunityPosts(req, res, next) {
  try {
    const { communityId } = req.params;
    const posts = await Post.find({ community: communityId });
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

async function createPost(req, res, next) {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
