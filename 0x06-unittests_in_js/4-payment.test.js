// 4-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM and log the result', function() {
    // Stub the Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
