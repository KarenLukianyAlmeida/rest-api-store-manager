const productsFromModel = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do CapitÃ£o AmÃ©rica' },
];

const productFromModel = { id: 2, name: 'Traje de encolhimento' };

const newProductName = { name: 'Zeldinha' };
const newProductIdFromModel = { insertId: 4 };
const newProductFromService = { id: 4, name: 'Zeldinha' };

const productByIdFromService = { status: 'SUCCESSFUL', data: productFromModel };
const productsFromService = { status: 'SUCCESSFUL', data: productsFromModel };
const productNameInvalidFromService = {
  status: 'INVALID_VALUE',
  data: { message: '"name" length must be at least 5 characters long' },
};

const productNonexistentFromService = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

const idInvalidFromService = {
  status: 'INVALID_VALUE',
  data: { message: '"value" must be a number' },
};

module.exports = {
  productsFromModel,
  productFromModel,
  productByIdFromService,
  idInvalidFromService,
  productsFromService,
  productNonexistentFromService,
  newProductIdFromModel,
  newProductName,
  newProductFromService,
  productNameInvalidFromService
};