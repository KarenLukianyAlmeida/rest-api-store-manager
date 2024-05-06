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

  afterEach(function () {
    sinon.restore();
  });
});