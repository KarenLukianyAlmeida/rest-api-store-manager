const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../src/app');
const { productModel } = require('../../src/models');
const { productsFromModel } = require('../mocks/product.mock');

describe('Tests product routes', function () {
  it('Return all products', async function () {
    sinon.stub(productModel, 'getAllProduct').resolves(productsFromModel);

    const response = await chai.request(app).get('/products');
    console.log('response', response.body);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(productsFromModel);
  });

  it('Add new product', async function () {
    sinon.stub(productModel, 'addNewProduct').resolves(7);
    sinon.stub(productModel, 'findById').resolves({ id: 7, name: 'newProduct' });

    const response = await chai.request(app).post('/products').send({ name: 'newProduct' });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({ id: 7, name: 'newProduct' });
  });

  it('Update product', async function () {
    sinon.stub(productModel, 'updateProduct').resolves();
    sinon.stub(productModel, 'findById').resolves({ id: 7, name: 'newProductName' });

    const id = 7;
    const response = await chai.request(app).put(`/products/${id}`).send({ name: 'newProductName' });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ id, name: 'newProductName' });
  });

  afterEach(function () {
    sinon.restore(); 
  });
});