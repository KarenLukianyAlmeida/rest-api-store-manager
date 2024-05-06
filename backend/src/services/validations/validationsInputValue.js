const { idSchema } = require('./schemas');

const validatetId = (productIdToValidate) => {
  const { error } = idSchema.validate(productIdToValidate);
  if (error) {
    return { status: 'INVALID_VALUE', message: error.message };
  }
};

module.exports = {
  validatetId,
};