const { checkRequiredQuantityField } = require('../utils/checkRequiredFields');

const validateQuantityField = (req, res, next) => {
  const requiredFields = ['quantity'];

  const { body } = req;

  const quantityError = checkRequiredQuantityField(body, requiredFields);

  if (quantityError) return res.status(400).json({ message: quantityError });

  return next();
};

module.exports = validateQuantityField;