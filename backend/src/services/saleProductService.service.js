const { saleProductModel } = require('../models');
const schema = require('./validations/validationsInputValue');

const getAllSales = async () => {
  const sales = await saleProductModel.getAllSales();

  return { status: 'SUCCESSFUL', data: sales };
};

const getSaleById = async (saleId) => {
  const error = schema.validatetId(saleId);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const sale = await saleProductModel.findById(saleId);
  if (!sale || sale.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }

  return { status: 'SUCCESSFUL', data: sale };
};

const addNewSale = async (saleData) => {
  const error = schema.validateSaleDataSchema(saleData);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const newSale = await saleProductModel.addNewSale(saleData);
  return { status: 'CREATED', data: newSale };
};

const deleteSale = async (saleId) => {
  const sale = await saleProductModel.findById(saleId);
  if (!sale || sale.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }

  await saleProductModel.deleteSale(saleId);
  return { status: 'NO_CONTENT', data: 'deleted sale' };
};

const updateProductQuantity = async (saleId, productId, quantity) => {
  const error = schema.validateQuantityDataSchema(quantity);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  await saleProductModel.updateProductQuantity(saleId, productId, quantity);
  const [sale] = await saleProductModel.findById(saleId);
  const { date } = sale;
  const result = {
    date,
    productId: Number(productId),
    quantity: Number(quantity),
    saleId: Number(saleId),
  };
  
  return { status: 'SUCCESSFUL', data: result };
};

module.exports = {
  getAllSales,
  getSaleById,
  addNewSale,
  deleteSale,
  updateProductQuantity,
};