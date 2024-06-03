const productService = require('../services/productService.service');

const validateProductExistence = async (req, res, next) => {
  const { productId } = req.params;
  const product = await productService.getProductById(productId);
  if (product.status === 'NOT_FOUND') {
    return res.status(404).json({ message: 'Product not found in sale' });
  }

  return next();
};

module.exports = validateProductExistence;