const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const validateSaleExistence = require('../../../src/middlewares/validateSaleExistence');
const { saleProductService } = require('../../../src/services');

describe('Testing SALE MIDDLEWARE', function () {
  it('Validates sale existence', async function () {
    sinon.stub(saleProductService, 'getSaleById').resolves({
      status: 'SUCCESSFUL',
      data: {
        date: '2024-06-03T17:11:05.000Z',
        productId: 2,
        quantity: 2,
        saleId: 1,
      },
    });

    const next = sinon.stub().returns();
    const req = { params: { saleId: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await validateSaleExistence(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Does not validate non-existent sale', async function () {
    sinon.stub(saleProductService, 'getSaleById').resolves({
      status: 'NOT_FOUND',
      data: { message: 'Sale not found' },
    });

    const next = sinon.stub().returns();
    const req = { params: { saleId: 111111 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await validateSaleExistence(req, res, next);

    expect(next).not.to.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});