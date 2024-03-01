const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Test suite for calculateNumber function with type SUM
describe('#calculateNumber() with type SUM', () => {
  // Test case: adding two integers
  it('should return 4 when adding 1 and 3', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });

  // Test case: adding an integer and a float
  it('should return 5 when adding 1 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });

  // More test cases...
});

// Test suite for calculateNumber function with type SUBTRACT
describe('#calculateNumber() with type SUBTRACT', () => {
  // Test case: subtracting two integers
  it('should return -2 when subtracting 1 and 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  // Test case: subtracting an integer from a float
  it('should return -4 when subtracting 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  // More test cases...
});

// Test suite for calculateNumber function with type DIVIDE
describe('#calculateNumber() with type DIVIDE', () => {
  // Test case: dividing two integers
  it('should return 0.25 when dividing 1 and 4', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
  });

  // Test case: dividing a float by an integer
  it('should return 0.25 when dividing 1 and 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });

  // More test cases...
});
