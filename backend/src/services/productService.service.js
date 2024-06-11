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

const updateProduct = async (productData, productId) => {
  const error = schema.validateProductDataSchema(productData);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const product = await productModel.findById(productId);
  if (!product || product.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  await productModel.updateProduct(productData, productId);

  const updatedProduct = await productModel.findById(productId);
  return { status: 'SUCCESSFUL', data: updatedProduct };
};

const deleteProduct = async (productId) => {
  const product = await productModel.findById(Number(productId));
  if (!product || product.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  await productModel.deleteProduct(productId);
  return { status: 'NO_CONTENT', data: 'deleted product' };
};

const getProductsByName = async (name) => {
  console.log('Name em service: ', typeof name);
  if (name === undefined) {
    const allProducts = await productModel.getAllProduct();
    return { status: 'SUCCESSFUL', data: allProducts };
  }

  const products = await productModel.getProductsByName(name);
  if (!products || products.length === 0) {
    return { status: 'SUCCESSFUL', data: [] };
  }

  return { status: 'SUCCESSFUL', data: products };
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getProductsByName,
};