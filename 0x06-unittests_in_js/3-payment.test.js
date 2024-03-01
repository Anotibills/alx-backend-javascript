// Importing necessary modules
const { expect } = require('chai');
const sinon = require('sinon');

// Importing Utils module and sendPaymentRequestToApi function
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi function', () => {
  // Create a spy/wrapper of the calculateNumber function from Utils module
  const utilSpy = sinon.spy(Utils, 'calculateNumber');

  // Test case to validate the usage of the Utils function
  it('should validate the usage of the Utils function', () => {
    // Run the sendPaymentRequestToApi function with the provided parameters
    sendPaymentRequestToApi(100, 20);
    
    // Check that the spy was called exactly once
    expect(utilSpy.calledOnce).to.be.true;
    
    // Check that the spy was called at least once with the provided arguments
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy
    utilSpy.restore();
  });
});
