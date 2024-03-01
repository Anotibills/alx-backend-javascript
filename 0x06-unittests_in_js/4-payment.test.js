// Importing necessary modules
const { expect } = require('chai');
const sinon = require('sinon');

// Importing Utils module and sendPaymentRequestToApi function
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  // Create a spy to track calls to console.log
  const consoleSpy = sinon.spy(console, 'log');

  // Test case to validate the usage of Utils.calculateNumber
  it('validates usage of Utils.calculateNumber', () => {
    // Stub the calculateNumber function to always return the same number (10)
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Call the sendPaymentRequestToApi function with the provided parameters
    sendPaymentRequestToApi(100, 20);
    
    // Check that the stub is called with the correct arguments
    expect(calcNumStub.calledWith('SUM', 100, 20)).to.be.true;

    // Check that the stub always returns the same number (10)
    expect(calcNumStub.alwaysReturned(10)).to.be.true;

    // Check with the spy that console.log logs the correct message 
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and the spy
    calcNumStub.restore();
    consoleSpy.restore();
  });
});
