const connection = require('./connection');

const getAllProduct = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findById = async (productId) => {
  const [product] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
};

module.exports = {
  findById,
  getAllProduct,
};