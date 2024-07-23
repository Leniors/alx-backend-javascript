const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2]? process.argv[2]: 'database.csv';
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const file = await new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

    const lines = file.trim().split('\n');
    const students = lines.slice(1).filter((line) => line);

    res.write(`Number of students: ${students.length}\n`);

    const fields = {};
    students.forEach((student) => {
      const details = student.split(',');
      const field = (details[details.length - 1]).trim();
      const firstName = details[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    const fieldEntries = Object.entries(fields);
    fieldEntries.forEach(([field, students], index) => {
      const isLast = index === fieldEntries.length - 1;
      res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      if (!isLast) {
        res.write('\n');
      }
    });
  } catch (err) {
    res.write('Cannot load the database');
  }
  res.end();
});

app.listen(PORT, () => {
  console.log(`...`);
});

module.exports = app;
