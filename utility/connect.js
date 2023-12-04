const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async function () {
  try {
    await mongoose.connect(process.env.URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.log(error);
  }
};
