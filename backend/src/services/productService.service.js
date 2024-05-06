const { productModel } = require('../models');
const schema = require('./validations/validationsInputValue');

const getAllProducts = async () => {
  const products = await productModel.getAllProduct();
  
  return { status: 'SUCCESSFUL', data: products };
};

const getProductById = async (productId) => {
  const error = schema.validatetId(productId);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }
  
  const product = await productModel.findById(productId);
  if (!product || product.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  return { status: 'SUCCESSFUL', data: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};