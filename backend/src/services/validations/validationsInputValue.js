const { idSchema } = require('./schemas');

const validateProductId = (productIdToValidate) => {
  const { error } = idSchema.validate(productIdToValidate);
  if (error) {
    return { status: 'INVALID_VALUE', message: error.message };
  }
};

module.exports = {
  validateProductId,
};