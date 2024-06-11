const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const {
  productsFromModel,
  productFromModel,
  newProductIdFromModel,
  newProductName,
} = require('../../mocks/product.mock');

chai.use(sinonChai);
const { expect } = chai;

describe('Realizando testes - PRODUCT MODEL:', function () {
  it('Recupera todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromModel]);
    const products = await productModel.getAllProduct();

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(3);
    expect(products).to.be.deep.equal(productsFromModel);
  });

  it('Recupera product pelo id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromModel]]);
    const productId = 2;
    
    const product = await productModel.findById(productId);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(productFromModel);
  });

  it('Cria product com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([newProductIdFromModel]);

    const productId = await productModel.addNewProduct(newProductName);
    expect(productId).to.be.a('number');
  });

  it('Atualiza product com sucesso', async function () {
    const executeSutb = sinon.stub(connection, 'execute').resolves();
    const productData = { name: 'Martelo do Batman' };
    const productId = 2;

    await productModel.updateProduct(productData, productId);

    expect(executeSutb).to.have.been.calledOnceWith();
  });

  it('Deleta product com sucesso', async function () {
    const executeSutb = sinon.stub(connection, 'execute').resolves();
    const productId = 2;

    await productModel.deleteProduct(productId);

    expect(executeSutb).to.have.been.calledOnceWith();
  });

  it('Get products by name', async function () {
    sinon.stub(connection, 'execute').resolves([{ id: 1, name: 'Martelo de Thor' }]);

    const products = await productModel.getProductsByName('Martelo');

    expect(products).to.be.an('object');
  });

  afterEach(function () {
    sinon.restore();
  });
});