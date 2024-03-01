// Importing necessary modules
const { expect } = require('chai');

// Importing getPaymentTokenFromApi function
const getPaymentTokenFromApi = require('./6-payment_token');

// Test suite for getPaymentTokenFromApi function
describe('getPaymentTokenFromApi', () => {
  // Test case to check the output of getPaymentTokenFromApi with true as success
  it('checks output of getPaymentTokenFromApi with true as success', (done) => {
    // Calling getPaymentTokenFromApi function with success flag set to true
    getPaymentTokenFromApi(true)
      .then((res) => {
        // Asserting that the response includes the expected data
        expect(res).to.include({ data: 'Successful response from the API' });
        // Marking the test as done
        done();
      })
      .catch((err) => done(err)); // Handling any errors and marking the test as done
  });
});
