// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const port = 7865;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  // Send a response with the message "Welcome to the payment system"
  res.end('Welcome to the payment system');
});

// Define a route for the "/cart/:id" URL pattern
// ":id" is a route parameter representing the cart ID, which must be numeric
app.get('/cart/:id([0-9]+)', (req, res) => {
  // Send a response with information about payment methods for the specified cart ID
  res.end(`Payment methods for cart ${req.params.id}`);
});

// Start the Express server and make it listen on the specified port
app.listen(port, () => {
  // Log a message indicating that the API is available
  console.log('API available on localhost port 7865');
});
