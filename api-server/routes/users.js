const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Session = require("../models/session");

router.route("/").get(getAllUsers);

router.route("/verify").get(handleVerification);

router.route("/login").post(handleLogin);

router.route("/logout").post(handleLogout);

router.route("/signup").post(handleSignup);

// SECURE ME LATER
async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

async function handleVerification(req, res, next) {
  try {
    if (!("authorization" in req.headers)) {
      throw createError(401, "Authorization header missing");
    }
    const { sid } = JSON.parse(req.headers.authorization);
    // find the session
    const session = await Session.findOne({ _id: sid });
    if (!session || !session._id) {
      throw createError(401, "User verification failed");
    }
    // get that session's user details
    const user = await User.findOne({ _id: session.userId });
    if (!user) {
      throw createError(401, "User not found");
    }
    // don't want to send the user's password to the client
    const { password, ...goodUser } = user._doc;
    res.status(200).json(goodUser);
  } catch (err) {
    next(err);
  }
}

async function handleLogin(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) throw createError(401, "User not found");
    user.comparePassword(password, async (err, isMatch) => {
      if (err) throw createError(400, "An error occured");
      if (!isMatch) throw createError(401, "Wrong password");
      // successful; create a user session
      const session = await Session.create({ userId: user._id });
      if (!session || !session._id) {
        throw createError(401, "Error creating session");
      }
      // don't want to send the user's password to the client
      const { password, ...goodUser } = user._doc;
      res.status(200).json({ sid: session._id, ...goodUser });
    });
  } catch (err) {
    next(err);
  }
}

async function handleLogout(req, res, next) {
  try {
    const { userId } = req.body;
    // delete all this user's sessions
    await Session.deleteMany({ userId });
    res.status(200).json({ message: "Successful logout" });
  } catch (err) {
    next(err);
  }
}

async function handleSignup(req, res, next) {
  try {
    const newUser = await User.create(req.body);
    if (!newUser) throw createError(400, "Error creating user");
    const session = await Session.create({ userId: newUser._id });
    if (!session || !session._id) {
      throw createError(400, "Error creating session");
    }
    // don't want to send the user's password to the client
    const { password, ...goodUser } = newUser._doc;
    res.status(200).json({ sid: session._id, ...goodUser });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
