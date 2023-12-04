const joi = require("joi");

const registerValidation = (data) => {
  const schemaValidation = joi.object({
    username: joi.string().required().min(2).max(12),
    password: joi.string().required().min(5).max(1024),
  });
  return schemaValidation.validate(data);
};

const logInValidation = (data) => {
  const schemaValidation = joi.object({
    username: joi.string().required().min(2).max(12),
    password: joi.string().required().min(5).max(1024),
  });
  return schemaValidation.validate(data);
};

const postValidation = (data) => {
  const schemaValidation = joi.object({
    title: joi.string().required().min(3).max(12),
    topic: joi.string().valid("politics", "health", "sport", "tech").required(),
    timeStamp: joi.string().required(),
    message: joi.string().required().min(10).max(150),
    ownerId: joi.string().required(),
    expiry: joi.string().required(),
    live: joi.boolean().required(),
  });
  return schemaValidation.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.logInValidation = logInValidation;
module.exports.postValidation = postValidation;
