const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Session = require("../models/session");
const { getCookieOptions } = require("../utils");

router.route("/").get(getAllUsers);

router.route("/verify").get(handleVerification);

router.route("/login").post(handleLogin);

router.route("/logout").post(handleLogout);

router.route("/signup").post(handleSignup);

// SECURE ME LATER
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function handleVerification(req, res) {
  try {
    if (!("authorization" in req.headers)) {
      throw new Error("Authorization header missing");
    }
    const { sid } = JSON.parse(req.headers.authorization);
    console.log(req.headers);
    console.log(req.headers.authorization);
    // find the session
    const session = await Session.findOne({ _id: sid });
    if (!session || !session._id) {
      throw new Error("User verification failed");
    }
    // get that session's user details
    const user = await User.findOne({ _id: session.userId });
    if (!user) {
      throw new Error("User not found");
    }
    // don't want to send the user's password to the client
    const { password, ...goodUser } = user._doc;
    res.status(200).json(goodUser);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Please log in first" });
  }
}

async function handleLogin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.comparePassword(password, async (err, isMatch) => {
      if (err) return res.status(400).json({ message: "An error occured" });
      if (!isMatch) return res.status(401).json({ message: "Wrong password" });
      // successful; create a user session
      const session = await Session.create({ userId: user._id });
      if (!session || !session._id) throw new Error("Session error");
      // don't want to send the user's password to the client
      const { password, ...goodUser } = user._doc;
      // const cookieOptions = getCookieOptions();
      res
        .status(200)
        // .cookie("sid", session._id, cookieOptions)
        .json({ sid: session._id, ...goodUser });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function handleLogout(req, res) {
  try {
    const { userId } = req.body;
    // clear cookie
    res.clearCookie("sid");
    // delete all this user's sessions
    await Session.deleteMany({ userId });
    res.status(200).json({ message: "Successful logout" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function handleSignup(req, res) {
  try {
    const newUser = await User.create(req.body);
    const session = await Session.create({ userId: newUser._id });
    if (!session || !session._id) throw new Error("Session error");
    // don't want to send the user's password to the client
    const { password, ...goodUser } = newUser._doc;
    const cookieOptions = getCookieOptions();
    res
      .status(200)
      .cookie("sid", session._id, cookieOptions)
      .json(goodUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = router;
