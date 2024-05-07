const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const {
  productsFromService,
  productByIdFromService,
  productNonexistentFromService,
  idInvalidFromService,
  newProductName,
  newProductFromService,
} = require('../../mocks/product.mock');

describe('Realizando testes - PRODUCT CONTROLLER:', function () {
  it('Recuperando todos os products com sucesso', async function () {
    sinon.stub(productService, 'getAllProducts').resolves(productsFromService);

    const req = {};

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.allProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromService.data);
  });

  it('Recuperando produto por id com sucesso', async function () {
    sinon.stub(productService, 'getProductById').resolves(productByIdFromService);

    const req = {
      params: { id: '2' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.productById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productByIdFromService.data);
  });

  it('Não recupera produto por id inexistente', async function () {
    sinon.stub(productService, 'getProductById').resolves(productNonexistentFromService);

    const req = {
      params: { id: '999' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.productById(req, res);

    const responseData = productNonexistentFromService.data;
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Não recupera produto por id inválido', async function () {
    sinon.stub(productService, 'getProductById').resolves(idInvalidFromService);

    const req = {
      params: { id: 'batatinha' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.productById(req, res);
    const responseData = idInvalidFromService.data;
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Cria product com sucesso', async function () {
    sinon.stub(productService, 'getProductById').resolves(productByIdFromService);

    const req = {
      body: newProductName,
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.addNewProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductFromService);
  });

  afterEach(function () {
    sinon.restore();
  });
});