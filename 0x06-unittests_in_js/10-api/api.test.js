const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('should return status code 200 for the index page', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 for valid cart id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.match(/^Payment methods for cart \d+$/); // Regex to match the expected format
      done();
    });
  });

  it('should return status code 404 for invalid cart id', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', () => {
  it('should return status code 200 and correct JSON for /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const jsonBody = JSON.parse(body);
      expect(jsonBody).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  it('should return status code 200 and welcome message for /login', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Alice' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Alice');
      done();
    });
  });
});
