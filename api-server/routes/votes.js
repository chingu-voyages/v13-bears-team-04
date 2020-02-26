const createError = require("http-errors");
const router = require("express").Router();
const { Vote, Post } = require("../models");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router.get("/all", getAllVotes);
router.post("/onPost/:postId", checkSession, voteOnPost);
router.post("/onComment/:commentId", checkSession, voteOnComment);

// ===== CONTROLLERS ===== //

async function getAllVotes(req, res, next) {
  try {
    const votes = await Vote.find();
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

    const targetPost = await Post.findById(postId);
    // check if the user previously voted on this post
    const previousVoteId = targetPost.votes.find(postVoteId =>
      user.votes.includes(postVoteId)
    );

    // update previous vote or create a new one
    if (previousVoteId) {
      const previousVote = await Vote.findById(previousVoteId);
      // if the votes are the same, throw an error
      if (previousVote.isUpVote === isUpVote) {
        throw createError(400, "That vote has already been registered");
      }
      // otherwise update the vote document and save it
      previousVote.isUpVote = isUpVote;
      previousVote.voteDate = Date.now();
      await previousVote.save();
    } else {
      const newVote = await Vote.create({
        isUpVote,
        postId,
        isOnPost: true,
        owner: user._id,
      });
      user.votes.push(newVote._id);
      await user.save();
    }

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

async function voteOnComment(req, res, next) {
  try {
    const { user } = res.locals;
    const { commentId } = req.params;
    const { isUpVote, postId } = req.body;

    const targetComment = await Comment.findById(commentId);
    // check if the user previously voted on this comment
    const previousVoteId = targetComment.votes.find(commentVoteId =>
      user.votes.includes(commentVoteId)
    );

    // update previous vote or create a new one
    if (previousVoteId) {
      const previousVote = await Vote.findById(previousVoteId);
      // if the votes are the same, throw an error
      if (previousVote.isUpVote === isUpVote) {
        throw createError(400, "That vote has already been registered");
      }
      // otherwise update the vote document and save it
      previousVote.isUpVote = isUpVote;
      previousVote.voteDate = Date.now();
      await previousVote.save();
    } else {
      const newVote = await Vote.create({
        isUpVote,
        postId,
        commentId,
        isOnComment: true,
        owner: user._id,
      });
      user.votes.push(newVote._id);
      await user.save();
    }

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
