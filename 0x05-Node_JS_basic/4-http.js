// Import the http module
const http = require('http');

// Create the HTTP server and assign it to the variable app
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text
  res.end('Hello Holberton School!'); // Send response and end connection
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable
module.exports = app;