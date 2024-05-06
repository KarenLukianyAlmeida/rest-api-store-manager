const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const {
  productsFromModel,
  productFromModel,
} = require('../../mocks/product.mock');

describe('Realizando testes - PRODUCT MODEL:', function () {
  it('Recupera todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(productsFromModel);
    const products = await productModel.getAllProduct();

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(3);
    expect(products).to.be.deep.equal(productsFromModel);
  });

  it('Recupera product pelo id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(productFromModel);
    const productId = 2;

    const product = await productModel.findById(productId);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});