// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM and log the result', function() {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Stub console.log to capture its output
    const consoleStub = sinon.stub(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.calledWithExactly('The total is: 120')).to.be.true;

    // Restore the spy and stub
    calculateNumberSpy.restore();
    consoleStub.restore();
  });
});
