const productsFromModel = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do CapitÃ£o AmÃ©rica' },
];

const productFromModel = { id: 2, name: 'Traje de encolhimento' };

const productByIdFromService = { status: 'SUCCESSFUL', data: productFromModel };
const productsFromService = { status: 'SUCCESSFUL', data: productsFromModel };

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
};