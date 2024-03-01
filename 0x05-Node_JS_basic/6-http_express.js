//This HTTP server uses express to assign variable

const express = require('express');

const app = express();
const port = 1245;

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Route for root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Error handling for unmatched routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
