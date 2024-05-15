const Joi = require('joi');

const idSchema = Joi.number().min(1);

const productSchema = Joi.object({ name: Joi.string().min(5) });

const saleSchema = Joi.object({
  productId: Joi.number().min(1),
  quantity: Joi.number().min(1),
});

module.exports = {
  idSchema,
  productSchema,
  saleSchema,
};