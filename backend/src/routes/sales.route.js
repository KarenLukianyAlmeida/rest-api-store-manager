const route = require('express').Router();
const { saleProductController } = require('../controllers');
const validateSaleFields = require('../middlewares/validateSaleFields');
const validateSaleProductExistence = require('../middlewares/validateSaleProductExistence');
const validateQuantityField = require('../middlewares/validateQuantityField');
const validateSaleExistence = require('../middlewares/validateSaleExistence');
const validateProductExistence = require('../middlewares/validateProductExistence');

route.get('/', saleProductController.allSales);
route.get('/:id', saleProductController.saleById);
route.post('/', validateSaleFields, validateSaleProductExistence, saleProductController.addNewSale);
route.delete('/:id', saleProductController.deleteSale);
route.put(
  '/:saleId/products/:productId/quantity', 
  validateSaleExistence,
  validateProductExistence,
  validateQuantityField,
  saleProductController.updateProductQuantity,
);

module.exports = route;