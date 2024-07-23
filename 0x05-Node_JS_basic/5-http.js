const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to read students from CSV file
const readDatabase = (dbPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines = data.trim().split('\n');
      const students = lines.map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, age, field };
      }).filter(student => student.firstname); // Filter out invalid students

      resolve(students);
    });
  });
};

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = path.join(__dirname, 'database.csv');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const students = await readDatabase(dbPath);
      const fields = {};
      students.forEach(student => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });
      res.write(`Number of students: ${students.length}\n`);
      for (const field in fields) {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      }
    } catch (err) {
      res.statusCode = 500;
      res.write(`Cannot load the database: ${err.message}`);
    }
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable
module.exports = app;
