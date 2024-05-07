const { idSchema, productSchema } = require('./schemas');

const validatetId = (productIdToValidate) => {
  const { error } = idSchema.validate(productIdToValidate);
  if (error) {
    return { status: 'INVALID_VALUE', message: error.message };
  }
};

const validateProductDataSchema = (productData) => {
  const { error } = productSchema.validate(productData);
  if (error) {
    return { status: 'INVALID_VALUE', message: error.message };
  }
};

module.exports = {
  validatetId,
  validateProductDataSchema,
};