// Importing necessary modules
const { expect } = require('chai');
const sinon = require('sinon');

// Importing sendPaymentRequestToApi function
const sendPaymentRequestToApi = require('./5-payment');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // runs before each test in this block
    // Creating a spy to track calls to console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // runs after each test in this block
    // Asserting that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
    // Restoring the console.log spy
    consoleSpy.restore();
  });

  // Test case to check the output of sendPaymentRequestToApi with 100 and 20 as arguments
  it('checks output of sendPaymentRequestToApi with 100 and 20 as args', () => {
    sendPaymentRequestToApi(100, 20);
    // Asserting that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  // Test case to check the output of sendPaymentRequestToApi with 10 and 10 as arguments
  it('checks output of sendPaymentRequestToApi with 10 and 10 as args', () => {
    sendPaymentRequestToApi(10, 10);
    // Asserting that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});

