const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const VoteSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: "User",
    required: [true, "Author ID Required"],
  },
  isOnPost: {
    type: Boolean,
  },
  postId: {
    type: ObjectId,
    ref: "Post",
  },
  isOnComment: {
    type: Boolean,
  },
  commentId: {
    type: ObjectId,
    ref: "Comment",
  },
  isUpVote: {
    type: Boolean,
    required: true,
  },
  voteDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = model("Vote", VoteSchema);
