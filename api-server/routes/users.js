const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Session = require("../models/session");

router.route("/users").get(getAllUsers);

router.route("/verify").post(handleVerification);

router.route("/login").post(handleLogin);

router.route("/logout").post(handleLogout);

router.route("/register").post(handleRegistration);

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
    const { sid } = req.body;
    console.log(req.body);
    const session = await Session.findOne({ _id: sid });
    console.log(session);
    res.status(200).json({ message: "Successful Verification" });
  } catch (err) {
    console.log(err);
  }
}

async function handleLogin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.comparePassword(password, (err, isMatch) => {
      if (err) return res.status(400).json({ message: "An error occured" });
      if (!isMatch) return res.status(401).json({ message: "Wrong password" });
      console.log("1");
    });
    console.log("2");
    // destructure the user goodies
    const {
      _id,
      email,
      posts,
      comments,
      communitiesSubbed,
      communitiesModded,
      createdOn
    } = user;

    // create a user session
    const session = await Session.create({ userId: _id });
    const sid = session._id;
    console.log(session);
    // return user and sessionId
    res.status(200).json({
      sid,
      _id,
      username,
      email,
      posts,
      comments,
      communitiesSubbed,
      communitiesModded,
      createdOn
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function handleLogout(req, res) {
  try {
    const body = req.body;
    console.log(body);
    res.status(200).json({ message: "Tried logging out" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function handleRegistration(req, res) {
  try {
    const newUser = await User.create(req.body);
    const { _id, username } = newUser;
    const sessUser = { _id, username };
    req.session.user = sessUser;
    console.log(req.session);
    res.status(200).json(sessUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = router;
