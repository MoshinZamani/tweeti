const { boolean } = require("joi");
const mongoose = require("mongoose");

const interctionSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  postId: { type: String },
  interactionType: [
    {
      like: Boolean,
      dislike: Boolean,
      comment: Boolean,
    },
  ],
  postExpireTimeInDays: {
    type: String,
  },
});

const Interaction = mongoose.model("Interaction", interctionSchema);

module.exports = Interaction;
