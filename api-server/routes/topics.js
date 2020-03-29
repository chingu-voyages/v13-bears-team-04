const router = require("express").Router();
const { Topic } = require("../models");

// ===== ROUTES ===== //
router.get("/", getAllTopics);
router.post("/", createTopics);

// ===== CONTROLLERS ===== //

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
    res.status(201).json(newTopics);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
