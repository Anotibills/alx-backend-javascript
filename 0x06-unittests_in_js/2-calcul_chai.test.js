const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

// Test suite for calculateNumber function with type SUM
describe('#calculateNumber() with type SUM', () => {
  // Test case: adding two integers
  it('should return 4 when adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  // Test case: adding an integer and a float
  it('should return 5 when adding 1 and 3.7', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  // More test cases...
});

// Test suite for calculateNumber function with type SUBTRACT
describe('#calculateNumber() with type SUBTRACT', () => {
  // Test case: subtracting two integers
  it('should return -2 when subtracting 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  // Test case: subtracting an integer from a float
  it('should return -4 when subtracting 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  // More test cases...
});

// Test suite for calculateNumber function with type DIVIDE
describe('#calculateNumber() with type DIVIDE', () => {
  // Test case: dividing two integers
  it('should return 0.25 when dividing 1 and 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });

  // Test case: dividing a float by an integer
  it('should return 0.25 when dividing 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });

  // More test cases...
});
