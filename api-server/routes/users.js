const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.route("/users").get(getAllUsers);

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

async function handleLogin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.comparePassword(password, (err, isMatch) => {
      if (err) return res.status(400).json({ message: "An error occured" });
      if (!isMatch) return res.status(401).json({ message: "Wrong password" });
      res.status(200).json(user);
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
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = router;
