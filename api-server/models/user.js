const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email Required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password Required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [60, "Password must be 60 characters or less"],
  },
  username: {
    type: String,
    required: [true, "Username Required"],
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [20, "Username must be 20 characters or less"],
    unique: true,
    uniqueCaseInsensitive: true,
  },
  lowerUsername: {
    type: String,
    lowercase: true,
  },
  communities: {
    member: [
      {
        type: ObjectId,
        ref: "Community",
      },
    ],
    moderator: [
      {
        type: ObjectId,
        ref: "Community",
      },
    ],
    administrator: [
      {
        type: ObjectId,
        ref: "Community",
      },
    ],
  },
  posts: [
    {
      type: ObjectId,
      ref: "Post",
    },
  ],
  comments: [
    {
      type: ObjectId,
      ref: "Comment",
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
    required: [true, "Creation Date Required"],
  },
  votes: [
    {
      type: ObjectId,
      ref: "Vote",
    },
  ],
});

// returns the following error message, if the value isn't unique
// ex) Error, email must be unique.
UserSchema.plugin(uniqueValidator, {
  message: "Error, {PATH} must be unique.",
});

// before we save the user document we'll convert the plain text password to a hash
UserSchema.pre("save", function(next) {
  // remove spaces in username
  const username = this.username.split(" ").join("");
  this.username = username;
  this.lowerUsername = username;

  // hash password if it's been modified
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10).then(hashedPassword => {
    this.password = hashedPassword;
    next();
  });
});

UserSchema.post("save", function(error, _, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("That username name is already taken"));
  }
  next();
});

UserSchema.methods.checkPassword = (givenPassword, userPassword) => {
  return bcrypt.compare(givenPassword, userPassword);
};

module.exports = model("User", UserSchema);
