const createError = require("http-errors");
const router = require("express").Router();
const { Post, Community, Comment } = require("../models");
const { verifyToken } = require("../middleware");

// ===== ROUTES ===== //

router.get("/", getAllPosts);
router.get("/:postId", getOnePost);
router.put("/:postId", updatePost);
router.get("/community/:communityId", getCommunityPosts);
router.post("/community/:communityId", verifyToken, createPost);

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
      })
      .select({ comments: 0 })
      .lean();
    if (!post) throw createError(400, `Couldn't find post (${postId})`);

    const comments = await Comment.find({ postId: post._id })
      .populate({
        path: "author",
        select: "username",
      })
      .lean();

    res.status(200).json({ ...post, comments });
  } catch (err) {
    next(err);
  }
}

async function getAllPosts(_, res, next) {
  try {
    const allPosts = await Post.find()
      .populate({
        path: "author",
        select: "username -_id",
      })
      .populate({
        path: "community",
        select: "name theme description createdOn users",
      })
      .lean();

    const posts = allPosts.map(({ comments, ...post }) => ({
      ...post,
      numOfComments: comments.length,
    }));

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

async function getCommunityPosts(req, res, next) {
  try {
    const { communityId } = req.params;

    const allCommunityPosts = await Post.find({ community: communityId })
      .populate({
        path: "author",
        select: "username -_id",
      })
      .populate({
        path: "community",
        select: "name theme -_id",
      })
      .lean();

    const posts = allCommunityPosts.map(({ comments, ...post }) => ({
      ...post,
      numOfComments: comments.length,
    }));

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

async function updatePost(req, res, next) {
  try {
    const { postId } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { ...req.body, lastModified: Date.now() },
      { new: true }
    ).lean();

    res.status(201).json(updatedPost);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
