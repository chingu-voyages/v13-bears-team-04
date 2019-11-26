const { Schema, model } = require("mongoose");

const SessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "A user must be associated with a session"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24
  }
});

module.exports = model("Session", SessionSchema);
