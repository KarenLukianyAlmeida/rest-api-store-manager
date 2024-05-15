const { checkRequiredSaleFields } = require('../utils/checkRequiredFields');

const validateSaleFields = (req, res, next) => {
  const RequiredFields = ['productId', 'quantity'];

  const { body } = req;

  const saleError = checkRequiredSaleFields(body, RequiredFields);
  if (saleError) return res.status(400).json({ message: saleError });

  next();
};

module.exports = validateSaleFields;