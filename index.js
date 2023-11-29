const connect = require("./utility/connect.js");
const express = require("express");
const Post = require("./model/post.js");

const app = express();
app.use(express.json());

connect();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.send(error);
  }
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.send(error);
  }
});

app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body);
    if (!post) return res.status(404).send(`Could not find post with id ${id}`);
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {}
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
