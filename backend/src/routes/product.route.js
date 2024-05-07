const route = require('express').Router();
const { productController } = require('../controllers');
const validateProductFields = require('../middlewares/validateProductFields');

route.get('/', productController.allProducts);
route.get('/:id', productController.productById);
route.post('/', validateProductFields, productController.addNewProduct);

module.exports = route;