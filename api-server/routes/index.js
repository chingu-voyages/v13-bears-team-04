const express = require("express");
const router = express.Router();
const posts = require("./posts");

router.use("/posts", posts);

module.exports = router;
