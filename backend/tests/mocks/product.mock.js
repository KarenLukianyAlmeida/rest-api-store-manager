const productsFromModel = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do CapitÃ£o AmÃ©rica' },
];
const salesProductsFromModel = [
  {
    saleId: 1,
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
  {
    saleId: 2,
    date: '2024-05-03T16:15:51.000Z',
    productId: 3,
    quantity: 15,
  },
];

const productFromModel = { id: 2, name: 'Traje de encolhimento' };
const saleProductFromModel = {
  saleId: 2,
  date: '2024-05-03T16:15:51.000Z',
  productId: 3,
  quantity: 15,
};

const productByIdFromService = { status: 'SUCCESSFUL', data: productFromModel };
const saleProductByIdFromService = { status: 'SUCCESSFUL', data: saleProductFromModel };

const productNonexistentFromService = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};
const saleProductNonexistentFromService = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

const productsFromService = { status: 'SUCCESSFUL', data: productsFromModel };

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
  saleProductFromModel,
  salesProductsFromModel,
  saleProductByIdFromService,
  saleProductNonexistentFromService,
};