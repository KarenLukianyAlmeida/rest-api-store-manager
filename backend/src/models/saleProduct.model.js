const camelize = require('camelize');
const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormatedQuery');

const getAllSales = async () => {
  const [sales] = await connection.execute(`
    SELECT sale_id, date, product_id, quantity
    FROM sales_products AS sp
      INNER JOIN sales AS s ON s.id = sp.sale_id
      INNER JOIN products AS p ON p.id = sp.product_id 
      ORDER BY s.id ASC, p.id ASC
  `);

  return camelize(sales);
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(`
  SELECT date, product_id, quantity
  FROM sales_products AS sp
    INNER JOIN sales AS s ON s.id = sp.sale_id
    INNER JOIN products AS p ON p.id = sp.product_id 
    WHERE sp.sale_id = ?
    ORDER BY s.id ASC, p.id ASC
  `, [saleId]);

  return camelize(sale);
};

const addNewSale = async (saleData) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales () VALUES ()');
  const saleId = insertId;
  const completSaleData = saleData.map((item) => ({
    saleId, 
    productId: item.productId,
    quantity: item.quantity,
  }));

  const columns = getFormattedColumnNames(completSaleData[0]);
  const placeholders = getFormattedPlaceholders(completSaleData[0]);

  const query = `INSERT INTO sales_products (${columns}) VALUE (${placeholders});`;
  const insertPromises = completSaleData
    .map((item) => connection.execute(query, Object.values(item)));
  await Promise.all(insertPromises);

  const newSale = { id: saleId, itemsSold: saleData };
  
  return newSale;
};

module.exports = {
  getAllSales,
  findById,
  addNewSale,
};