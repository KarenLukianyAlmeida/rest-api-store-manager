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

const addNewSale = async (req, res) => {
  const saleData = req.body;

  const { status, data } = await saleProductService.addNewSale(saleData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await saleProductService.deleteSale(Number(id));
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProductQuantity = async (req, res) => {
  const { saleId, productId } = req.params;
  const { quantity } = req.body;

  const { status, data } = await saleProductService
    .updateProductQuantity(saleId, productId, quantity);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allSales,
  saleById,
  addNewSale,
  deleteSale,
  updateProductQuantity,
};