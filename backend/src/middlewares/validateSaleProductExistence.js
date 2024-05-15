const saleProductService = require('../services/saleProductService.service');

const validateSaleProductExistence = async (req, res, next) => {
  const productData = req.body;

  const promises = productData.map((product) => {
    const id = product.productId;
    return saleProductService.getSaleById(id);
  });

  const products = await Promise.race(promises);

  if (products.status === 'NOT_FOUND') {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  next();
};

module.exports = validateSaleProductExistence;