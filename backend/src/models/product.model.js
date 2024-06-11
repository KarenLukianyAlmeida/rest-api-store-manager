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

const updateProduct = async (productData, productId) => {
  const updateValues = Object.keys(productData).map((key) => `${key} = ?`).join(', ');
  const query = `UPDATE products SET ${updateValues} WHERE id = ?;`;
  const updateParams = [...Object.values(productData), productId];
  await connection.execute(query, updateParams);
};

const deleteProduct = async (productId) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [productId]);
};

const getProductsByName = async (name) => {
  const [products] = await connection.execute(`SELECT * FROM products WHERE name LIKE '%${name}%'`);
  console.log('Products from model: ', products);
  return products;
};

module.exports = {
  findById,
  getAllProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getProductsByName,
};