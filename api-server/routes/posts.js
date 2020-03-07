const router = require("express").Router();
const { Post, Community } = require("../models");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router.get("/", getAllPosts);
router.get("/:communityId", getCommunityPosts);
router.post("/:communityId", checkSession, createPost);

// ===== CONTROLLERS ===== //

async function getOnePost(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId)
      .populate({
        path: "author",
        // can use the communities to determine if the poster is a moderator
        // could create a util function to reuse that logic on the frontend
        select: "username communities",
      })
      .populate({
        path: "community",
        select: "name description users theme createdOn",
      });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
}

async function getAllPosts(_, res, next) {
  try {
    const posts = await Post.find()
      .populate({
        path: "author",
        select: "username -_id",
      })
      .populate({
        path: "community",
        select: "name theme description createdOn users",
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
        select: "username -_id",
      })
      .populate({
        path: "community",
        select: "name theme -_id",
      });
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

async function createPost(req, res, next) {
  try {
    const { community } = req.body;

    const newPost = await Post.create(req.body);
    const postId = newPost._id;

    const targetCommunity = await Community.findById(community);
    targetCommunity.posts.push(postId);
    await targetCommunity.save();
    const communityName = targetCommunity.name;

    const user = res.locals.user;
    user.posts.push(postId);
    await user.save();

    const { password, ...updatedUser } = user._doc;

    res.status(201).json({ postId, communityName, updatedUser });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
