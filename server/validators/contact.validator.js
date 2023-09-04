const Joi = require("joi");

const validateContact = (contact) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(4).max(5000).required(),
  });
  return schema.validate(contact);
};

module.exports = {
  validateContact,
};
