const { send } = require("express/lib/response");
const jsonWebToken = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers["auth-token"];
  if (!token) return res.status(401).send({ message: "Access denied!" });
  try {
    const verified = jsonWebToken.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }
}
module.exports = verifyToken;
