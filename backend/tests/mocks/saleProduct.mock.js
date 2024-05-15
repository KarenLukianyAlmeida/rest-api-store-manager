const salesProductsFromModel = [
  {
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
  {
    date: '2024-05-03T16:15:51.000Z',
    productId: 3,
    quantity: 15,
  },
];

const newSaleData = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 5 },
];
const invalidNewSaleData = [
  { productId: 1, quantity: 0 },
  { productId: 2, quantity: 5 },
];

const saleProductFromModel = {
  saleId: 2,
  date: '2024-05-03T16:15:51.000Z',
  productId: 3,
  quantity: 15,
};

const newSaleProductIdFromModel = 3;
const addFirstSaleProduct = {
  saleId: newSaleProductIdFromModel,
  productId: 1,
  quantity: 1,
};
const addSecondSaleProduct = {
  saleId: newSaleProductIdFromModel,
  productId: 2,
  quantity: 5,
};
const newSaleProductFromModel = {
  id: 3,
  itemsSold: [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 5 },
  ],
};
const newSaleProductFromService = { status: 'CREATED', data: newSaleProductFromModel };
const newSaleProductInvalidFromService = {
  status: 'INVALID_VALUE',
  data: { message: '"quantity" must be greater than or equal to 1' },
};

const saleProductByIdFromService = { status: 'SUCCESSFUL', data: saleProductFromModel };

const salesProductsFromService = { status: 'SUCCESSFUL', data: salesProductsFromModel };

const saleProductNonexistentFromService = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

module.exports = {
  saleProductFromModel,
  salesProductsFromModel,
  saleProductByIdFromService,
  saleProductNonexistentFromService,
  salesProductsFromService,
  newSaleData,
  newSaleProductFromModel,
  newSaleProductIdFromModel,
  addFirstSaleProduct,
  addSecondSaleProduct,
  newSaleProductFromService,
  newSaleProductInvalidFromService,
  invalidNewSaleData,
};