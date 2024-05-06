const camelize = require('camelize');
const connection = require('./connection');

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
  console.log(sale);

  return camelize(sale);
};

module.exports = {
  getAllSales,
  findById,
};