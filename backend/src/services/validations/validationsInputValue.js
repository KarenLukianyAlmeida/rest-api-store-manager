const { idSchema, productSchema, saleSchema, quantitySchema } = require('./schemas');

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

const validateQuantityDataSchema = (quantity) => {
  const { error } = quantitySchema.validate(quantity);
  if (error) {
    return { status: 'INVALID_VALUE', message: '"quantity" must be greater than or equal to 1' };
  }
};

module.exports = {
  validatetId,
  validateProductDataSchema,
  validateSaleDataSchema,
  validateQuantityDataSchema,
};