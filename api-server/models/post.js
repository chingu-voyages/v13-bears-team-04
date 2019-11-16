const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  createdOn: { type: Date, required: true, default: new Date() },
  lastModified: { type: Date, required: true, default: new Date() },
  lastUpvoted: { type: Date, required: true, default: new Date() },
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  voteScore: { type: Number, required: true, default: 0 },
  deleted: { type: Boolean, required: true, default: false },
  reported: { type: Boolean, required: true, default: false },
  comments: { type: [String], required: true, default: [] }
})

module.exports = mongoose.model('Post', PostSchema)
