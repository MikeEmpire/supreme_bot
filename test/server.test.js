const { expect } = require('chai');
const request = require('request');

const BASE_URL = require('./fixtures/baseUrl');

describe('Server is running correctly', () => {
  it('returns 200 status', (done) => {
    request(BASE_URL, (err, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
