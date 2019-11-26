const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema({
  author: {
    type: ObjectId,
    ref: "User",
    required: [true, "Author ID Required"]
  },
  content: {
    type: String,
    required: [true, "Content Required"],
    minlength: [2, "Password must be at least 2 characters"],
    maxlength: [300, "Password must be 300 characters or less"]
  },
  createdOn: {
    type: Date,
    default: Date.now,
    required: [true, "Creation Date Required"]
  },
  lastModified: {
    type: Date,
    default: Date.now,
    required: [true, "Last Date Modified Required"]
  },
  lastUpvoted: {
    type: Date,
    default: Date.now,
    required: [true, "Last Date Upvoted Required"]
  }
});

CommentSchema.plugin(uniqueValidator, { message: Co });

module.exports = model("Comment", CommentSchema);
