const mongoose = require("mongoose");

const interctionSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  type: {
    type: String,
    enum: ["like", "dislike", "comment"],
  },
  postExpireTime: {
    type: String,
  },
});

const Interaction = mongoose.model("Interaction", interctionSchema);

module.exports = Interaction;
