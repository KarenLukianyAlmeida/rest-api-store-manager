const route = require('express').Router();
const { saleProductController } = require('../controllers');

route.get('/', saleProductController.allSales);
route.get('/:id', saleProductController.saleById);

module.exports = route;