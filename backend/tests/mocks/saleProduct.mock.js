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

const saleProductFromModel = {
  saleId: 2,
  date: '2024-05-03T16:15:51.000Z',
  productId: 3,
  quantity: 15,
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
};