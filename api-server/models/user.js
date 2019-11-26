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
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password Required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [30, "Password must be 30 characters or less"]
  },
  username: {
    type: String,
    required: [true, "Username Required"],
    unique: true,
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [20, "Username must be 20 characters or less"]
  },
  communitiesSubbed: [
    {
      type: ObjectId,
      ref: "Community"
    }
  ],
  communitiesModded: [
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
  ],
  comments: [
    {
      type: ObjectId,
      ref: "Comment"
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now,
    required: [true, "Creation Date Required"]
  }
});

// returns the following error message, if the value isn't unique
// ex) Error, email must be unique.
UserSchema.plugin(uniqueValidator, {
  message: "Error, {PATH} must be unique."
});

// before we save the user document we'll convert the plain text password to a hash
UserSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10).then(hashedPassword => {
    this.password = hashedPassword;
    next();
  });
});

// STEPS TO USE
// 1) find user by email or username
// const user = User.findOne({ email/username })
// 2) compare the password entered
// user.comparePassword(submittedPW, callback)
// 3) callback is called with two parameters
// function(err, isMatch)
// 4) use if statements to handle the results
UserSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return next(err);
    next(null, isMatch);
  });
};

module.exports = model("User", UserSchema);
