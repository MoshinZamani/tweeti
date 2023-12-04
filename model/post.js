const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  topic: {
    type: String,
    enum: ["politics", "health", "sport", "tech"],
    description: "Must be Politics, Health, Sport or Tech",
  },
  timeStamp: {
    type: String,
  },
  message: { type: String, required: [true, "Please enter a message"] },
  expiry: {
    type: String,
  },
  live: { type: Boolean, default: true },
  ownerId: {
    type: String,
    require: true,
  },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  comments: {
    type: [String],
    default: [],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
