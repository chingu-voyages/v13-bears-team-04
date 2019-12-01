const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.route("/").get(getAllPosts);

router
  .route("/:community")
  .get(getCommunityPosts)
  .post(createPost);

async function getAllPosts(_, res) {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getCommunityPosts(req, res) {
  try {
    const { community } = req.params;
    // SWITCH after new models are pushed
    // const posts = await Post.find({ community });
    const posts = await Post.find({ category: community });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function createPost(req, res) {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = router;
