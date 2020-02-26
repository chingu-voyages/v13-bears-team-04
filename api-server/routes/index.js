const express = require("express");
const router = express.Router();

const posts = require("./posts");
const users = require("./users");
const communities = require("./communities");
const topics = require("./topics");
const comments = require("./comments");
const votes = require("./votes");

router.get("/", (_, res) => res.send("v13 Bears 4 Reddit Clone API"));
router.use("/user", users);
router.use("/posts", posts);
router.use("/community", communities);
router.use("/topics", topics);
router.use("/comment", comments);
router.use("/vote", votes);

module.exports = router;
