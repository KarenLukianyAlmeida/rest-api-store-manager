const saleProductService = require('../services/saleProductService.service');

const validateSaleExistence = async (req, res, next) => {
  const { saleId } = req.params;
  const sale = await saleProductService.getSaleById(saleId);
  if (sale.status === 'NOT_FOUND') {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return next();
};

module.exports = validateSaleExistence;