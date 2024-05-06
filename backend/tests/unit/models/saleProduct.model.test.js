const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { saleProductModel } = require('../../../src/models');
const {
  saleProductFromModel,
  salesProductsFromModel,
} = require('../../mocks/product.mock');

describe('Realizando testes - SALE_PRODUCT MODEL:', function () {
  it('Recupera todos as sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(salesProductsFromModel);
    const products = await saleProductModel.getAllSales();

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(2);
    expect(products).to.be.deep.equal(salesProductsFromModel);
  });

  it('Recupera sale pelo id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(saleProductFromModel);
    const saleId = 2;

    const product = await saleProductModel.findById(saleId);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(saleProductFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});