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

module.exports = {
  getAllSales,
  getSaleById,
};