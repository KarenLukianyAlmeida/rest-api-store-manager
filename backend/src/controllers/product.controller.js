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

module.exports = {
  allProducts,
  productById,
  addNewProduct,
};