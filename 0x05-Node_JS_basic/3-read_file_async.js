const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const file = await fs.readFile(path, 'utf-8');
    const lines = file.trim().split('\n');
    const students = lines.slice(1).filter((line) => line);

    console.log(`Number of students: ${students.length}`);

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

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
