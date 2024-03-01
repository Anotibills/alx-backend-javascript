const express = require('express');
const router = express.Router();

// Define route handlers
router.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

router.get('/students', (req, res) => {
  res.send('This is the list of our students');
});

router.get('/students/:major', (req, res) => {
  const { major } = req.params;
  res.send(`Students in ${major} major`);
});

module.exports = router;

