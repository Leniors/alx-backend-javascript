const express = require('express');
const app = express();
const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint with regex to validate :id must be a number
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});
