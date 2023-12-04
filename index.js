const connect = require("./utility/connect.js");
const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./route/user");
const postsRoute = require("./route/post");
const verifyToken = require("./verifyToken.js");

const app = express();
app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});
// connect to Mongodb
connect();

app.get("/token", verifyToken, (req, res) => {
  res.send("teken verified");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
