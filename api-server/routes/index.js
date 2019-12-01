const express = require("express");
const router = express.Router();

const posts = require("./posts");
const users = require("./users");
const community = require("./community");

router.use("/user", users);
router.use("/posts", posts);
router.use("/community", community);

module.exports = router;
