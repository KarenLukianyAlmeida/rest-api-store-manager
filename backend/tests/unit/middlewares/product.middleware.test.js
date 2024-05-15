const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const validateProductFields = require('../../../src/middlewares/validateProductFields');

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

  afterEach(function () {
    sinon.restore();
  });
});