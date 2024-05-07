const Joi = require('joi');

const idSchema = Joi.number().min(1);

const productSchema = Joi.object({ name: Joi.string().min(5) });

module.exports = {
  idSchema,
  productSchema,
};