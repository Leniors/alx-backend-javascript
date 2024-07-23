// Import the http module
const http = require('http');

// Create the HTTP server and assign it to the variable app
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`...`);
});
