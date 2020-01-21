const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const TopicSchema = new Schema({
  text: {
    type: String,
    required: [true, "Topic Text Required"],
    unique: true,
    minlength: [2, "Topic must be at least 2 characters"],
    maxlength: [30, "Topic must be 30 characters or less"]
  },
  isRecommended: {
    type: Boolean,
    default: false
  },
  communities: [
    {
      type: ObjectId,
      ref: "Community"
    }
  ],
  posts: [
    {
      type: ObjectId,
      ref: "Post"
    }
  ]
});

module.exports = model("Topic", TopicSchema);
