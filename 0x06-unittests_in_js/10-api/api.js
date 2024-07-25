const express = require('express');
const app = express();

app.use(express.json()); // For parsing application/json

// Existing endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Existing endpoint
app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.sendStatus(404);
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

// New endpoint for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New endpoint for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app; // Export app for testing
