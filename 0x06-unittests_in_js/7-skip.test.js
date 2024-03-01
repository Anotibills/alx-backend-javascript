// Importing Chai library for assertions
const { expect } = require('chai');

// Test suite for testing numbers
describe('Testing numbers', () => {
  // Test case to check if 1 is equal to 1
  it('1 is equal to 1', () => {
    // Assertion: 1 should be equal to 1
    expect(1 === 1).to.be.true;
  });

  // Test case to check if 2 is equal to 2
  it('2 is equal to 2', () => {
    // Assertion: 2 should be equal to 2
    expect(2 === 2).to.be.true;
  });

  // Test case to check if 1 is equal to 3 (skipped)
  it.skip('1 is equal to 3', () => {
    // Assertion: 1 should be equal to 3
    expect(1 === 3).to.be.true;
  });

  // Test case to check if 3 is equal to 3
  it('3 is equal to 3', () => {
    // Assertion: 3 should be equal to 3
    expect(3 === 3).to.be.true;
  });

  // Test case to check if 4 is equal to 4
  it('4 is equal to 4', () => {
    // Assertion: 4 should be equal to 4
    expect(4 === 4).to.be.true;
  });

  // Test case to check if 5 is equal to 5
  it('5 is equal to 5', () => {
    // Assertion: 5 should be equal to 5
    expect(5 === 5).to.be.true;
  });

  // Test case to check if 6 is equal to 6
  it('6 is equal to 6', () => {
    // Assertion: 6 should be equal to 6
    expect(6 === 6).to.be.true;
  });

  // Test case to check if 7 is equal to 7
  it('7 is equal to 7', () => {
    // Assertion: 7 should be equal to 7
    expect(7 === 7).to.be.true;
  });
});
