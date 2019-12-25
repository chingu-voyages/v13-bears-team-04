const express = require("express");
const router = express.Router();
const Topic = require("../models/topic");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router
  .route("/")
  .get(getAllTopics)
  .post(checkSession, createTopics);

// ===== FUNCTIONS ===== //

async function getAllTopics(req, res, next) {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (err) {
    next(err);
  }
}

async function createTopics(req, res, next) {
  try {
    const { topics } = req.body;
    const newTopics = await Topic.insertMany(topics);
    res.status(200).json(newTopics);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
