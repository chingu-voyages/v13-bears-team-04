const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema({
  author: {
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
    required: [true, "Post ID Required"],
  },
  isOnComment: {
    type: Boolean,
  },
  commentId: {
    type: ObjectId,
    ref: "Comment",
  },
  content: {
    type: String,
    required: [true, "Content Required"],
    minlength: [1, "Content must contain at least 1 character"],
    maxlength: [2000, "Content must not exceed 2000 characters"],
  },
  createdOn: {
    type: Date,
    default: Date.now,
    required: [true, "Creation Date Required"],
  },
  lastModified: {
    type: Date,
    default: Date.now,
    required: [true, "Last Date Modified Required"],
  },
  lastUpvoted: {
    type: Date,
    default: Date.now,
    required: [true, "Last Date Upvoted Required"],
  },
  comments: [
    {
      type: ObjectId,
      ref: "Comment",
    },
  ],
  isDeleted: {
    type: Boolean,
  },
  // once a certain length is reached, the comment content ...
  // ... should not be shown. Instead a button to reveal the ...
  // ... content should be rendered
  reported: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  votes: [
    {
      type: ObjectId,
      ref: "Vote",
    },
  ],
});

module.exports = model("Comment", CommentSchema);
