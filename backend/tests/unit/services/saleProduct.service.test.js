const { expect } = require('chai');
const sinon = require('sinon');
const { saleProductModel } = require('../../../src/models');
const { saleProductService } = require('../../../src/services');
const {
  saleProductFromModel,
  salesProductsFromModel,
  saleProductByIdFromService,
  saleProductNonexistentFromService,
  idInvalidFromService,
} = require('../../mocks/product.mock');

describe('Realizando testes - PRODUCT SERVICE:', function () {
  it('Recupera product por id com sucesso', async function () {
    sinon.stub(saleProductModel, 'findById').resolves(saleProductFromModel);
    const saleId = 2;

    const responseService = await saleProductService.getSaleById(saleId);

    const responseStatus = saleProductByIdFromService.status;
    const responseData = saleProductByIdFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Nao recupera product por id inexistente', async function () {
    sinon.stub(saleProductModel, 'findById').resolves(undefined);
    const saleId = 999;
    const responseStatus = saleProductNonexistentFromService.status;
    const responseData = saleProductNonexistentFromService.data;

    const responseService = await saleProductService.getSaleById(saleId);

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Nao recupera product por id inválido', async function () {
    const saleId = 'batatinha';

    const responseService = await saleProductService.getSaleById(saleId);

    const responseStatus = idInvalidFromService.status;
    const responseData = idInvalidFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Recupera products com sucesso', async function () {
    sinon.stub(saleProductModel, 'getAllSales').resolves(salesProductsFromModel);

    const responseService = await saleProductService.getAllSales();

    const responseStatus = salesProductsFromModel.status;
    const responseData = salesProductsFromModel.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  afterEach(function () {
    sinon.restore();
  });
});