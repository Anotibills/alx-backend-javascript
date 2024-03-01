const express = require('express');

// Create an Express application
const app = express();

// Define the port number for the server
const port = 7865;

// Middleware to parse JSON requests
app.use(express.json());

// Route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send a welcome message
  res.end('Welcome to the payment system');
});

// Route for '/cart/:id' endpoint to display payment methods for a specific cart
app.get('/cart/:id([0-9]+)', (req, res) => {
  // Extract cart ID from the request parameters
  const cartId = req.params.id;
  // Send a message indicating payment methods for the specified cart
  res.end(`Payment methods for cart ${cartId}`);
});

// Route for '/available_payments' endpoint to return available payment methods
app.get('/available_payments', (req, res) => {
  // Object containing available payment methods
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  // Respond with the available payment methods as JSON
  res.json(availablePayments);
});

// Route for '/login' endpoint to handle user login
app.post('/login', (req, res) => {
  // Extract username from the request body
  const username = req.body.userName;
  // Send a welcome message with the username
  res.end(`Welcome ${username}`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
