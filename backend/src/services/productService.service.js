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

const addNewProduct = async (productData) => {
  const error = schema.validateProductDataSchema(productData);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const newProductId = await productModel.addNewProduct(productData);
  const newProduct = await productModel.findById(newProductId);
  return { status: 'CREATED', data: newProduct };
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};