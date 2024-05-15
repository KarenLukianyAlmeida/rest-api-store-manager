const route = require('express').Router();
const { saleProductController } = require('../controllers');
const validateSaleFields = require('../middlewares/validateSaleFields');
const validateSaleProductExistence = require('../middlewares/validateSaleProductExistence');

route.get('/', saleProductController.allSales);
route.get('/:id', saleProductController.saleById);
route.post('/', validateSaleFields, validateSaleProductExistence, saleProductController.addNewSale);

module.exports = route;