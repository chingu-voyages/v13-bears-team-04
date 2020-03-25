const createError = require("http-errors");
const router = require("express").Router();
const { Comment, Post } = require("../models");
const { verifyToken } = require("../middleware");

// ===== ROUTES ===== //

router.post("/", verifyToken, createCommentOnPost);
router.get("/:commentId", getOneComment);
router.post("/onComment/:commentId", verifyToken, createCommentOnComment);
router.get("/post/:postId", getPostComments);
router.put("/:commentId", verifyToken, editComment);
router.delete("/:commentId", verifyToken, deleteComment);
router.post("/:commentId/report", verifyToken, reportComment);

// ===== CONTROLLERS ===== //

async function getPostComments(req, res, next) {
  try {
    const { postId } = req.params;
    const postComments = await Comment.find({ postId });
    res.status(200).json(postComments);
  } catch (err) {
    next(err);
  }
}

async function getOneComment(req, res, next) {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId)
      .populate({ path: "author", select: "username communities" })
      .populate("comments");
    if (!comment) {
      throw createError(404, `Couldn't find comment (${commentId})`);
    }
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
}

async function createCommentOnComment(req, res, next) {
  try {
    const { user } = res.locals;
    const { commentId } = req.params;
    const { postId, content } = req.body;

    const post = await Post.findById(postId);
    if (!post) throw createError(404, `Couldn't find post (${postId})`);

    const newComment = await new Comment({
      content,
      postId,
      commentId,
      author: user._id,
      isOnComment: true,
    });
    newComment.populate({ path: "author", select: "username" }).execPopulate();
    await newComment.save();

    post.comments.push(newComment._id);
    await post.save();

    user.comments.push(newComment._id);
    await user.save();

    res.status(201).json(newComment);
  } catch (err) {
    next(err);
  }
}

async function createCommentOnPost(req, res, next) {
  try {
    const { user } = res.locals;
    const { postId, content } = req.body;

    const post = await Post.findById(postId);
    if (!post) throw createError(404, `Couldn't find post (${postId})`);

    const newComment = await new Comment({
      content,
      postId,
      author: user._id,
      isOnPost: true,
    });
    newComment.populate({ path: "author", select: "username" }).execPopulate();
    await newComment.save();
    console.log(newComment);

    post.comments.push(newComment._id);
    await post.save();

    user.comments.push(newComment._id);
    await user.save();

    res.status(201).json(newComment);
  } catch (err) {
    next(err);
  }
}

async function editComment(req, res, next) {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    const targetComment = await Comment.findById(commentId);
    if (targetComment.isDeleted) {
      throw createError(
        405,
        "Sorry, you can't edit a comment that was previously deleted"
      );
    }
    targetComment.content = content;
    targetComment.lastModified = Date.now();
    await targetComment.save();

    res.status(200).json(updatedComment);
  } catch (err) {
    next(err);
  }
}

// ======================
// DELETING COMMENTS FLOW
// ======================
// find comment
// - check if there's any sub-comments
// --- no, delete comment document and remove from user document
// --- yes, flip isDeleted, remove content
async function deleteComment(req, res, next) {
  try {
    const { user } = res.locals;
    const { commentId } = req.params;

    const targetComment = await Comment.findById(commentId);
    if (targetComment.comments.length === 0) {
      await targetComment.remove();
      user.comments.pull(commentId);
      await user.save();
      res.status(200);
    } else {
      targetComment.content =
        '[{"type":"paragraph","children":[{"text":"Comment Deleted"}]}]';
      targetComment.isDeleted = true;
      targetComment.lastModified = Date.now();
      await targetComment.save();
      res.status(200);
    }
  } catch (err) {
    next(err);
  }
}

async function reportComment(req, res, next) {
  try {
    const { user } = res.locals;
    const { commentId } = req.params;

    const targetComment = await Comment.findById(commentId);
    const wasReported = targetComment.reported.some(
      reportedUserId => reportedUserId === user._id
    );
    if (wasReported) {
      throw createError(400, "You've already reported this comment.");
    }
    targetComment.reported.push(user._id);
    await targetComment.save();

    res.status(200).json(targetComment);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
