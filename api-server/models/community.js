const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const checkAdminCount = arr => arr.length > 0;

var CommunitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Community Name Required"],
    unique: true,
    minlength: [4, "Name must be at least 4 characters"],
    maxlength: [40, "Name must be 40 characters or less"]
  },
  description: {
    type: String,
    required: [true, "Description Required"],
    minlength: [4, "Password must be at least 4 characters"],
    maxlength: [500, "Name must be 500 characters or less"]
  },
  rules: [
    {
      type: String
    }
  ],
  posts: [
    {
      type: ObjectId,
      ref: "Post"
    }
  ],
  communitiesRelated: [
    {
      type: ObjectId,
      ref: "Commmunity"
    }
  ],
  userMembers: [
    {
      type: ObjectId,
      ref: "User"
    }
  ],
  userAdmins: {
    type: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],
    validate: [checkAdminCount, "Minimum 1 Admin Required"]
  },
  userMods: [
    {
      type: ObjectId,
      ref: "User"
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now,
    required: [true, "Creation Date Required"]
  },
  lastUpvoted: {
    type: Date,
    default: Date.now,
    required: [true, "Last Date Upvoted Required"]
  }
});

CommunitySchema.plugin(uniqueValidator, {
  message: "That community name is already taken"
});

module.exports = model("Community", CommunitySchema);
