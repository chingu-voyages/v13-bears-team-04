const createError = require("http-errors");
const router = require("express").Router();
const { Post, Community, Comment, User, Vote } = require("../models");
const { verifyToken } = require("../middleware");
const { groupBy } = require("../utils/groupBy");

// ===== ROUTES ===== //

router.get("/", getAllPosts);
router.get("/:postId", getOnePost);
router.put("/:postId", verifyToken, updatePost);
router.delete("/:postId", verifyToken, deletePost);
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

    const postVotes = await Vote.find({ isOnPost: true, postId });

    const allCommentsOnPost = await Comment.find({ postId: post._id })
      .populate({
        path: "author",
        select: "username",
      })
      .lean();

    const allCommentIds = allCommentsOnPost.map(({ _id }) => _id);

    const allCommentVotes = await Vote.find({
      isOnComment: true,
      commentId: { $in: allCommentIds },
    }).lean();

    const votesByComment = groupBy(allCommentVotes, "commentId");

    const comments = allCommentsOnPost.map(comment => ({
      ...comment,
      votes: votesByComment[comment._id] || [],
    }));

    res.status(200).json({ ...post, comments, votes: postVotes });
  } catch (err) {
    next(err);
  }
}

async function getAllPosts(_, res, next) {
  try {
    const allPosts = await Post.find({ isDeleted: false })
      .populate({
        path: "author",
        select: "username -_id",
      })
      .populate({
        path: "community",
        select: "name theme description createdOn users",
      })
      .lean();

    const allVotes = await Vote.find({ isOnPost: true }).lean();

    const votesByPosts = groupBy(allVotes, "postId");

    const posts = allPosts.map(({ comments, ...post }) => ({
      ...post,
      numOfComments: comments.length,
      votes: votesByPosts[post._id] || [],
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

    // find the post we're modifying
    const post = await Post.findById(postId);

    // check if user changed the community because we'll ...
    // ... have to removed and add the postId reference if so
    if (String(post.community) !== req.body.community) {
      // remove the post reference from the original community
      await Community.findByIdAndUpdate(post.community, {
        $pull: { posts: postId },
      });
      // add that post id to the updated commnunity
      await Community.findByIdAndUpdate(req.body.community, {
        $push: { posts: postId },
      });
    }

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

async function deletePost(req, res, next) {
  try {
    const { postId } = req.params;

    const targetPost = await Post.findById(postId);

    // check if there are any comments on this post
    // if so, we'll just deleted all the content and leave it
    if (targetPost.comments.length === 0) {
      await targetPost.remove();
    } else {
      targetPost.content =
        '[{"type":"paragraph","children":[{"text":"Post Deleted"}]}]';
      targetPost.isDeleted = true;
      targetPost.lastModified = Date.now();
      await targetPost.save();
    }

    // delete post id from it's community
    const community = await Community.findById(targetPost.community);
    community.posts = community.posts.filter(id => String(id) !== postId);
    await community.save();

    let user;
    let isAdmin;

    // delete post id from the post's author
    if (String(res.locals.user._id) === String(targetPost.author)) {
      user = res.locals.user;
      user.posts = user.posts.filter(id => String(id) !== postId);
      await user.save();
      isAdmin = false;
    } else {
      user = await User.findById(targetPost.author);
      user.posts = user.posts.filter(id => String(id) !== postId);
      await user.save();
      isAdmin = true;
    }

    await Vote.deleteMany({ postId });

    res.status(201).json({ postId, isAdmin, updatedUser: user });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
