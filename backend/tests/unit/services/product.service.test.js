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
  newProductName,
  newProductFromService,
  productNameInvalidFromService,
  updatedProduct,
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

  it('Cria product com sucesso', async function () {
    sinon.stub(productModel, 'addNewProduct').resolves(4);
    sinon.stub(productModel, 'findById').resolves(newProductFromService);

    const responseService = await productService.addNewProduct(newProductName);

    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.deep.equal(newProductFromService);
  });

  it('Não cria product com name que contenha uma string com menos de 5 caracteres', async function () {
    const productData = { name: 'bar' };

    const responseService = await productService.addNewProduct(productData);

    const responseStatus = productNameInvalidFromService.status;
    const responseData = productNameInvalidFromService.data;

    expect(responseService.status).to.equal(responseStatus);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Deleta product com sucesso', async function () {
    sinon.stub(productModel, 'findById').resolves({ id: 2, name: 'Martelo do Batman' });
    sinon.stub(productModel, 'deleteProduct').resolves();

    const responseService = await productService.deleteProduct(2);

    expect(responseService.status).to.equal('NO_CONTENT');
    expect(responseService.data).to.deep.equal('deleted product');
  });

  it('Atualiza product com sucesso', async function () {
    const findById = sinon.stub(productModel, 'findById');
    findById.onCall(0).resolves({ id: 2, name: 'Martelo do Batman' });
    findById.onCall(1).resolves(productFromModel);

    sinon.stub(productModel, 'updateProduct').resolves();

    const responseService = await productService.updateProduct();

    expect(responseService.status).to.equal(updatedProduct.status);
    expect(responseService.data).to.deep.equal(productFromModel);
  });

  it('Product is not updated when the "name" value has fewer than 5 characters', async function () {
    const responseService = await productService.updateProduct({ name: 'Mart' }, { productId: 2 });

    expect(responseService.status).to.equal('INVALID_VALUE');
    expect(responseService.data).to.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  it('Product is not updated when product does not exist', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);

    const responseService = await productService.updateProduct({ name: 'Martelo do Batman' }, { productId: 999 });

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Product not found' });
  });

  it('Não deleta product inexistente', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);

    const responseService = await productService.deleteProduct(2);

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Product not found' });
  });

  it('Get all products without a "name" on the URL', async function () {
    sinon.stub(productModel, 'getProductsByName').resolves([
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' },
    ]);

    const responseService = await productService.getProductsByName('');

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
    expect(responseService.data.length).to.be.equal(3);
  });

  it('Return a "[]" when the product is non-existent', async function () {
    sinon.stub(productModel, 'getProductsByName').resolves([]);

    const responseService = await productService.getProductsByName('batatinha');

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
    expect(responseService.data.length).to.be.equal(0);
  });

  it('Get a product by name', async function () {
    sinon.stub(productModel, 'getProductsByName').resolves([{ id: 1, name: 'Martelo de Thor' }]);

    const responseService = await productService.getProductsByName('Martelo');

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
  });

  afterEach(function () {
    sinon.restore();
  });
});