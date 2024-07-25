// 5-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('should log the correct total when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called once with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct total when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called once with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
