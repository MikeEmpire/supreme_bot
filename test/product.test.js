const { expect } = require('chai');
const request = require('request');

const BASE_URL = require('./fixtures/baseUrl');

describe('Products api is working correctly', () => {
  it('able to get all products', (done) => {
    const url = `${BASE_URL}/api/products`;
    request(url, (err, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('able to get a product by id', (done) => {
    const url = `${BASE_URL}/api/products/173778`;
    request(url, (err, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
