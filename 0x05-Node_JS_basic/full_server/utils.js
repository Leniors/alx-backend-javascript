const fs = require('fs');

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line);
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

      resolve(fields);
    });
  });
};

module.exports = readDatabase;
