const { productModel } = require('../models');
const schema = require('./validations/validationsInputValue');

const getAllProducts = async () => {
  let data = await productModel.getAllProduct();
  if (!data || data.length === 0) {
    data = { message: 'There ar no products' };
  }

  return { status: 'SUCCESSFUL', data };
};

const getProductById = async (productId) => {
  const error = schema.validateProductId(productId);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }
  
  const product = await productModel.findById(productId);
  return { status: 'SUCCESSFUL', data: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};