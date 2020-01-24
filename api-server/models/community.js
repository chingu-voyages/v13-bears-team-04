const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const checkCount = arr => arr.length > 0;

const CommunitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Community Name Required"],
    minlength: [4, "Name must be at least 4 characters"],
    maxlength: [40, "Name must be 40 characters or less"],
    unique: true,
    uniqueCaseInsensitive: true,
    trim: true
  },
  lowerName: {
    type: String,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, "Description Required"],
    minlength: [4, "Password must be at least 4 characters"],
    maxlength: [500, "Name must be 500 characters or less"],
    trim: true
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
  users: {
    members: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],
    moderators: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],
    administrators: {
      type: [
        {
          type: ObjectId,
          ref: "User"
        }
      ],
      validate: [checkCount, "Minimum 1 Admin Required"]
    }
  },
  topics: {
    type: [
      {
        type: ObjectId,
        ref: "Topic"
      }
    ],
    validate: [checkCount, "Minimum 1 Topic Required"]
  },
  communityType: {
    type: String,
    enum: ["public", "restricted", "private"],
    required: [true, "Community Type Required"]
  },
  isOver18: {
    type: Boolean,
    required: [true, "isOver18 Required"]
  },
  createdOn: {
    type: Date,
    default: Date.now,
    required: [true, "Creation Date Required"]
  },
  lastUpvoted: {
    type: Date,
    default: Date.now,
    required: [true, "Last Date Upvoted Required"]
  },
  theme: {
    type: {
      "--community-theme-main": String,
      "--community-theme-text": String
    },
    default: {
      "--community-theme-main": "#0079d3",
      "--community-theme-text": "#ffffff"
    }
  }
});

CommunitySchema.plugin(uniqueValidator, {
  message: "That community name is already taken"
});

CommunitySchema.pre("save", function(next) {
  if (this.isNew) {
    // remove spaces in name
    const name = this.name.split(" ").join("");
    this.name = name;
    this.lowerName = name;
  }
  next();
});

CommunitySchema.post("save", function(error, _, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    return next(new Error("That community name is already taken"));
  }
  next();
});

CommunitySchema.save;
module.exports = model("Community", CommunitySchema);
