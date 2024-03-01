// Importing Utils module
const Utils = require('./utils');

// Function to send payment request to API
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Calculate the total using the calculateNumber function from Utils module
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    // Log the total to the console
    console.log(`The total is: ${result}`);
}
  
// Exporting sendPaymentRequestToApi function for external use
module.exports = sendPaymentRequestToApi;
