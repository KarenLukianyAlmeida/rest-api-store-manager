const Joi = require('joi');

const idSchema = Joi.number().min(1);

module.exports = {
  idSchema,
};