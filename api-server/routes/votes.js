const router = require("express").Router();
const { Vote } = require("../models");
const { verifyToken } = require("../middleware");

// ===== ROUTES ===== //

router.get("/all", getAllVotes);
router.get("/post/:postId", getPostVotes);
router.get("/comment/:commentId", getCommentVotes);
router.post("/onPost/:postId", verifyToken, voteOnPost);
router.post("/onComment/:commentId", verifyToken, voteOnComment);

// ===== CONTROLLERS ===== //

async function getAllVotes(_, res, next) {
  try {
    const votes = await Vote.find();
    res.status(200).json(votes);
  } catch (err) {
    next(err);
  }
}

async function getPostVotes(req, res, next) {
  try {
    const { postId } = req.params;

    const votes = await Comment.find({ postId, isOnPost: true }).lean();

    res.status(200).json(votes);
  } catch (err) {
    next(err);
  }
}

async function getCommentVotes(req, res, next) {
  try {
    const { commentId } = req.params;

    const votes = await Comment.find({ commentId, isOnComment: true }).lean();

    res.status(200).json(votes);
  } catch (err) {
    next(err);
  }
}

async function voteOnPost(req, res, next) {
  try {
    const { user } = res.locals;
    const { postId } = req.params;
    const { isUpVote } = req.body;

    // check if user already voted on this post
    const previousVote = await Vote.findOne({ postId, owner: user._id });

    if (previousVote) {
      // if it's the same vote, then skip updating the document
      if (previousVote.isUpVote === isUpVote)
        return res.status(200).json(previousVote);

      // otherwise updated the vote and voteDate
      previousVote.isUpVote = isUpVote;
      previousVote.voteDate = Date.now();
      await previousVote.save();

      return res.status(200).json(previousVote);
    } else {
      const newVote = await Vote.create({
        isUpVote,
        postId,
        isOnPost: true,
        owner: user._id,
      });

      return res.status(201).json(newVote);
    }
  } catch (err) {
    next(err);
  }
}

async function voteOnComment(req, res, next) {
  try {
    const { user } = res.locals;
    const { commentId } = req.params;
    const { isUpVote } = req.body;

    // check if user already voted on this post
    const previousVote = await Vote.findOne({ commentId, owner: user._id });

    if (previousVote) {
      // if it's the same vote, then skip updating the document
      if (previousVote.isUpVote === isUpVote)
        return res.status(200).json(previousVote);

      // otherwise updated the vote and voteDate
      previousVote.isUpVote = isUpVote;
      previousVote.voteDate = Date.now();
      await previousVote.save();
      return res.status(200).json(previousVote);
    } else {
      const newVote = await Vote.create({
        isUpVote,
        commentId,
        isOnComment: true,
        owner: user._id,
      });
      return res.status(201).json(newVote);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = router;
