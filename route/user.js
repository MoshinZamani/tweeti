const express = require("express");
const User = require("../model/user");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const {
  registerValidation,
  logInValidation,
} = require("../validations/validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.send(error.message);
  } else {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user) return res.send("This username is taken");
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(req.body.password, salt);
      const newUser = await User.create({
        username: req.body.username,
        password: hashedPassword,
      });
      res.send(newUser);
    } catch (error) {
      console.log(error);
    }
  }
});

router.post("/login", async (req, res) => {
  const { error } = logInValidation(req.body);
  if (error) {
    res.send(error.message);
  } else {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user)
        return res
          .status(400)
          .send(`There is no user with the username : ${req.body.username}`);
      const compare = await bcryptjs.compare(req.body.password, user.password);
      if (!compare) return res.status(400).send("Password is wrong");
      const accesToken = jsonWebToken.sign(
        { _id: user._id },
        process.env.TOKEN_SECRET
      );
      const token = { "auth-token": accesToken };
      res.header(token).send(token);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
