const http = require('http');
const fs = require('fs');

// Function to read students from CSV file
const readDatabase = (dbPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      let lines = data.trim().split('\n');
      lines = lines.slice(1);
      const students = lines.map((line) => {
        const details = line.split(',');
        const field = (details[details.length - 1]).trim();
        const firstname = details[0];
        const lastname = details[1];
        const age = details[2];

        return { firstname, lastname, age, field };
      });

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
    const dbPath = process.argv[2]? process.argv[2]: 'database.csv';
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

      const fieldEntries = Object.entries(fields);
      fieldEntries.forEach(([field, students], index) => {
        const isLast = index === fieldEntries.length - 1;
        res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        if (!isLast) {
          res.write('\n');
        }
      });
    } catch (err) {
      res.write(`Cannot load the database`);
    }
    res.end();
  }
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`...`);
});

// Export the app variable
module.exports = app;
