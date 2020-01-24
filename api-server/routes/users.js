const createError = require("http-errors");
const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Session = require("../models/session");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router.route("/").get(getAllUsers);

router.route("/verify").get(checkSession, handleVerification);

router.route("/login").post(handleLogin);

router.route("/logout").post(checkSession, handleLogout);

router.route("/signup").post(handleSignup);

// ===== FUNCTIONS ===== //

// SECURE ME
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
    // user was set in checkSession middleware
    const user = res.locals.user;
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
    const lowerUsername = username.toLowerCase();

    const user = await User.findOne({ lowerUsername });
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
    // user was set in checkSession middleware
    const { _id } = res.locals.user;
    if (String(_id) !== userId) {
      throw createError(
        401,
        "Sorry not sorry. You can't sign out another user"
      );
    }
    // delete all this user's sessions
    await Session.deleteMany({ userId });

    res.status(200).json({ message: "Successfully logged out" });
  } catch (err) {
    next(err);
  }
}

async function handleSignup(req, res, next) {
  try {
    // create user
    const newUser = await User.create(req.body);
    if (!newUser) throw createError(400, "Error creating user");

    // create a session
    const session = await Session.create({ userId: newUser._id });
    if (!session || !session._id) {
      throw createError(400, "Error creating session");
    }

    // separate password since we don't want to send to the client
    const { password, ...goodUser } = newUser._doc;

    res.status(200).json({ sid: session._id, ...goodUser });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
