const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { saleProductService } = require('../../../src/services');
const { saleProductController } = require('../../../src/controllers');
const {
  salesProductsFromModel,
  saleProductFromModel,
  salesProductsFromService,
  saleProductByIdFromService,
  saleProductNonexistentFromService,
  deletedSaleFromService,
  dontDeleteSaleFromService,
  newSaleProductFromModel,
  newSaleData,
  newSaleProductFromService,
  updateSaleProductFromService,
  updatedSaleProduct,
} = require('../../mocks/saleProduct.mock');
const { idInvalidFromService } = require('../../mocks/product.mock');

describe('Realizando testes - SALE_PRODUCT CONTROLLER:', function () {
  it('Recuperando todos as sales com sucesso', async function () {
    sinon.stub(saleProductService, 'getAllSales').resolves(salesProductsFromService);

    const req = {};

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.allSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesProductsFromModel);
  });

  it('Recuperando sale por id com sucesso', async function () {
    sinon.stub(saleProductService, 'getSaleById').resolves(saleProductByIdFromService);

    const req = {
      params: { id: '2' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.saleById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleProductFromModel);
  });

  it('Não recupera sale por id inexistente', async function () {
    sinon.stub(saleProductService, 'getSaleById').resolves(saleProductNonexistentFromService);

    const req = {
      params: { id: '999' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.saleById(req, res);

    const responseData = saleProductNonexistentFromService.data;
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Não recupera sale por id inválido', async function () {
    sinon.stub(saleProductService, 'getSaleById').resolves(idInvalidFromService);

    const req = {
      params: { id: 'batatinha' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.saleById(req, res);
    const responseData = idInvalidFromService.data;
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Cria sale com suceso', async function () {
    sinon.stub(saleProductService, 'addNewSale').resolves(newSaleProductFromService);
    const req = {
      body: newSaleData,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.addNewSale(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSaleProductFromModel);
  });

  it('Deleta sale com sucesso', async function () {
    sinon.stub(saleProductService, 'deleteSale').resolves(deletedSaleFromService);

    const req = { params: { id: '2' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.deleteSale(req, res);
    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith(deletedSaleFromService.data);
  });

  it('Não deleta sale com inexistente', async function () {
    sinon.stub(saleProductService, 'deleteSale').resolves(dontDeleteSaleFromService);

    const req = { params: { id: '2' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.deleteSale(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(dontDeleteSaleFromService.data);
  });

  it('Product quantity is updated', async function () {
    sinon.stub(saleProductService, 'updateProductQuantity').resolves(updateSaleProductFromService);

    const req = { 
      params: { saleId: 1, productId: 2 },
      body: { quantity: 3 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleProductController.updateProductQuantity(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedSaleProduct);
  });

  afterEach(function () {
    sinon.restore();
  });
});