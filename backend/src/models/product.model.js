const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormatedQuery');
const connection = require('./connection');

const getAllProduct = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
};

const addNewProduct = async (productData) => {
  const columns = getFormattedColumnNames(productData);
  const placeholders = getFormattedPlaceholders(productData);
  const query = `INSERT INTO products (${columns}) VALUE (${placeholders});`;
  const [{ insertId }] = await connection.execute(query, [...Object.values(productData)]);
  
  return insertId;
};

module.exports = {
  findById,
  getAllProduct,
  addNewProduct,
};