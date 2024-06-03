const { expect } = require('chai');
const sinon = require('sinon');
const { saleProductModel } = require('../../../src/models');
const { saleProductService } = require('../../../src/services');
const {
  saleProductFromModel,
  salesProductsFromModel,
  salesProductsFromService,
  saleProductByIdFromService,
  saleProductNonexistentFromService,
  newSaleProductFromService,
  newSaleData,
  newSaleProductFromModel,
  invalidNewSaleData,
  newSaleProductInvalidFromService,
  updatedSaleProduct,
} = require('../../mocks/saleProduct.mock');
const { idInvalidFromService } = require('../../mocks/product.mock');

describe('Realizando testes - SALE_PRODUCT SERVICE:', function () {
  it('Recupera sale por id com sucesso', async function () {
    sinon.stub(saleProductModel, 'findById').resolves(saleProductFromModel);
    const saleId = 2;

    const responseService = await saleProductService.getSaleById(saleId);

    const responseStatus = saleProductByIdFromService.status;
    const responseData = saleProductByIdFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Nao recupera sale por id inexistente', async function () {
    sinon.stub(saleProductModel, 'findById').resolves(undefined);
    const saleId = 999;
    const responseStatus = saleProductNonexistentFromService.status;
    const responseData = saleProductNonexistentFromService.data;

    const responseService = await saleProductService.getSaleById(saleId);

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Nao recupera sale por id inválido', async function () {
    const saleId = 'batatinha';

    const responseService = await saleProductService.getSaleById(saleId);

    const responseStatus = idInvalidFromService.status;
    const responseData = idInvalidFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Recupera sales com sucesso', async function () {
    sinon.stub(saleProductModel, 'getAllSales').resolves(salesProductsFromModel);

    const responseService = await saleProductService.getAllSales();

    const responseStatus = salesProductsFromService.status;
    const responseData = salesProductsFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Cria sale com sucesso', async function () {
    sinon.stub(saleProductModel, 'addNewSale').resolves(newSaleProductFromModel);

    const responseService = await saleProductService.addNewSale(newSaleData);

    const responseStatus = newSaleProductFromService.status;
    const responseData = newSaleProductFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Não cria sale com quantidade menor ou igual a zero', async function () {
    const responseService = await saleProductService.addNewSale(invalidNewSaleData);

    const responseStatus = newSaleProductInvalidFromService.status;
    const responseData = newSaleProductInvalidFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Deleta sale com sucesso', async function () {
    sinon.stub(saleProductModel, 'findById').resolves({ id: 2, date: '2024-05-16 14:31:11' });
    sinon.stub(saleProductModel, 'deleteSale').resolves();

    const responseService = await saleProductService.deleteSale(2);

    expect(responseService.status).to.equal('NO_CONTENT');
    expect(responseService.data).to.deep.equal('deleted sale');
  });

  it('Não deleta sale inexistente', async function () {
    sinon.stub(saleProductModel, 'findById').resolves(undefined);

    const responseService = await saleProductService.deleteSale(2333);

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Sale not found' });
  });

  it('Atualiza quantity de um produto de uma determinada compra com sucesso', async function () {
    sinon.stub(saleProductModel, 'updateProductQuantity').resolves();
    sinon.stub(saleProductModel, 'findById').resolves([{ id: 2, date: '2024-05-16 14:31:11' }]);

    const saleId = 2;
    const productId = 2;
    const quantity = 20;

    const responseService = await saleProductService.updateProductQuantity(saleId, productId, quantity);

    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(updatedSaleProduct);
  });

  it('Sale product is not updated when the product quantity is equal to "0"', async function () {
    const saleId = 2;
    const productId = 2;
    const quantity = 0;

    const responseService = await saleProductService.updateProductQuantity(saleId, productId, quantity);

    expect(responseService.status).to.equal('INVALID_VALUE');
    expect(responseService.data).to.deep.equal({ message: '"quantity" must be greater than or equal to 1' });
  });

  afterEach(function () {
    sinon.restore();
  });
});