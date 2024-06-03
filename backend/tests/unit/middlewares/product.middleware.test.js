const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const validateProductFields = require('../../../src/middlewares/validateProductFields');
const validateProductExistence = require('../../../src/middlewares/validateProductExistence');
const { productService } = require('../../../src/services');

describe('Realizando testes - PRODUCT MIDDLEWARE:', function () {
  it('Valida productData', async function () {
    const next = sinon.stub().returns();

    const req = { body: { name: 'Zeldinha' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateProductFields(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Invalida productData', async function () {
    const next = sinon.stub().returns();

    const req = { body: { batatinha: 'Zeldinha' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateProductFields(req, res, next);
    const responseData = { message: '"name" is required' };

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Validates product existence', async function () {
    sinon.stub(productService, 'getProductById')
      .resolves({
        status: 'SUCCESFUL',
        data: { id: 3, name: 'productName' },
      });
    const next = sinon.stub().returns();

    const req = { params: { id: 3 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await validateProductExistence(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Does not noalidate non-existent product', async function () {
    sinon.stub(productService, 'getProductById')
      .resolves({
        status: 'NOT_FOUND',
        data: { message: 'Product not found in sale' },
      });
    const next = sinon.stub().returns();

    const req = { params: { id: 33333 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await validateProductExistence(req, res, next);

    expect(next).not.to.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});