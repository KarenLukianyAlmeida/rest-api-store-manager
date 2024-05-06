const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const {
  productsFromModel,
  productFromModel,
  idInvalidFromService,
  productByIdFromService,
  productsFromService,
  productNonexistentFromService,
} = require('../../mocks/product.mock');

describe('Realizando testes - PRODUCT SERVICE:', function () {
  it('Recupera product por id com sucesso', async function () {
    sinon.stub(productModel, 'findById').resolves(productFromModel);
    const productId = 2;

    const responseService = await productService.getProductById(productId);

    const responseStatus = productByIdFromService.status;
    const responseData = productByIdFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Nao recupera product por id inexistente', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);
    const productId = 999;
    const responseStatus = productNonexistentFromService.status;
    const responseData = productNonexistentFromService.data;

    const responseService = await productService.getProductById(productId);

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Nao recupera product por id inválido', async function () {
    const productId = 'batatinha';

    const responseService = await productService.getProductById(productId);

    const responseStatus = idInvalidFromService.status;
    const responseData = idInvalidFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Recupera products com sucesso', async function () {
    sinon.stub(productModel, 'getAllProduct').resolves(productsFromModel);

    const responseService = await productService.getAllProducts();

    const responseStatus = productsFromService.status;
    const responseData = productsFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  afterEach(function () {
    sinon.restore();
  });
});