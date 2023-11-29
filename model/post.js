const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  topic: {
    type: String,
    enum: ["Politics", "Health", "Sport", "Tech"],
    description: "Must be Politics, Health, Sport or Tech",
  },
  timeStamp: {
    type: String,
  },
  message: { type: String, required: [true, "Please enter a message"] },
  expirationDate: {
    type: String,
  },
  live: { type: Boolean, default: true },
  ownerId: {
    type: String,
  },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  comments: {
    type: [String],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
