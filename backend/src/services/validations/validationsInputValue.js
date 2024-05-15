const { idSchema, productSchema, saleSchema } = require('./schemas');

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

const validateSaleDataSchema = (saleData) => {
  for (let i = 0; i < saleData.length; i += 1) {
    const { error } = saleSchema.validate(saleData[i]);
    if (error) {
      return { status: 'INVALID_VALUE', message: error.message };
    }
  }
};

module.exports = {
  validatetId,
  validateProductDataSchema,
  validateSaleDataSchema,
};