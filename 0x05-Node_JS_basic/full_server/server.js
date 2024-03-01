const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router); // Handle requests to the root path
app.use('/students', router); // Handle requests to the /students path
app.use('/students/:major', router); // Handle requests to the /students/:major path

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

