const { saleProductService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allSales = async (_req, res) => {
  const { status, data } = await saleProductService.getAllSales();
  return res.status(mapStatusHTTP(status)).json(data);
};

const saleById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await saleProductService.getSaleById(Number(id));
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allSales,
  saleById,
};