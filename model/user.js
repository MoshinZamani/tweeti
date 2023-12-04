const mongoose = require("mongoose");

const useSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 2,
    max: 12,
  },
  password: {
    type: String,
    require: true,
    min: 5,
    max: 1024,
  },
});

module.exports = mongoose.model("User", useSchema);
