const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title Required"],
    unique: true,
    minlength: [4, "Password must be at least 4 characters"],
    maxlength: [300, "Password must be 300 characters or less"],
  },
  postType: {
    type: String,
    required: [true, "Post Type Required"],
  },
  content: {
    type: String,
    required: [true, "Content Required"],
  },
  author: {
    type: ObjectId,
    ref: "User",
    required: [true, "Author Required"],
  },
  community: {
    type: ObjectId,
    ref: "Community",
    required: [true, "Community Required"],
  },
  comments: [
    {
      type: ObjectId,
      ref: "Comment",
    },
  ],
  votes: [
    {
      type: ObjectId,
      ref: "Vote",
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
    required: [true, "isDeleted is Required"],
  },
  isReported: {
    type: Boolean,
    default: false,
    required: [true, "isReported is Required"],
  },
  isOver18: {
    type: Boolean,
    default: false,
    required: [true, "isOver18 is Required"],
  },
  isOC: {
    type: Boolean,
    default: false,
    required: [true, "isOC is Required"],
  },
  isSpoiler: {
    type: Boolean,
    default: false,
    required: [true, "isSpoiler is Required"],
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
});

PostSchema.plugin(uniqueValidator, {
  message: "That post title is already taken",
});

module.exports = model("Post", PostSchema);
