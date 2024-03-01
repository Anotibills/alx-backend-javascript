// Function to simulate fetching payment token from API
function getPaymentTokenFromAPI(success) {
  // If success flag is true, resolve the promise with a successful response
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

// Exporting the getPaymentTokenFromAPI function for external use
module.exports = getPaymentTokenFromAPI;
