const { productService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProducts = async (_req, res) => {
  const { status, data } = await productService.getAllProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const productById = async (req, res) => {
  const { id } = req.params;
  
  const { status, data } = await productService.getProductById(Number(id));
  return res.status(mapStatusHTTP(status)).json(data);
};

const addNewProduct = async (req, res) => {
  const productData = { ...req.body };

  const { status, data } = await productService.addNewProduct(productData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const productData = { ...req.body };
  const { id } = req.params;

  const { status, data } = await productService.updateProduct(productData, id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await productService.deleteProduct(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProductsByName = async (req, res) => {
  const name = req.query.q;
  console.log('Name from controller: ', name);

  const { status, data } = await productService.getProductsByName(name);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allProducts,
  productById,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getProductsByName,
};