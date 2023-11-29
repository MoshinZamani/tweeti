const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mongo-demo:t3H0QAyEzkegXmEd@cluster0.fyoqsol.mongodb.net/?retryWrites=true&w=majority";

module.exports = async function () {
  try {
    await mongoose.connect(uri);
    console.log("MongoDb connected");
  } catch (error) {
    console.log(error);
  }
};
