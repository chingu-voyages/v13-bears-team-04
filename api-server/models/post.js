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
    maxlength: [300, "Password must be 300 characters or less"]
  },
  body: {
    type: String,
    required: [true, "Content Required"]
  },
  author: {
    type: ObjectId,
    ref: "User",
    required: [true, "Author Required"]
  },
  community: {
    type: ObjectId,
    ref: "Community",
    required: [true, "Community Required"]
  },
  comments: [
    {
      type: ObjectId,
      ref: "Comment"
    }
  ],
  voteScore: {
    type: Number,
    default: 0
  },
  deleted: {
    type: Boolean,
    default: false
  },
  reported: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  lastUpvoted: {
    type: Date,
    default: Date.now
  }
});

// returns the following error message, if the value isn't unique
// ex) Error, title must be unique.
PostSchema.plugin(uniqueValidator, { message: "That title isn't available." });

module.exports = model("Post", PostSchema);
