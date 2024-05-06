const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.allProducts);
route.get('/:id', productController.productById);

module.exports = route;