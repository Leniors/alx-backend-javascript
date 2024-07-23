// controllers/StudentsController.js
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = 'database.csv';
    res.set('Content-Type', 'text/plain');

    try {
        const fields = await readDatabase(filePath);
        res.write('This is the list of our students\n');
        
        const fieldEntries = Object.entries(fields);
        fieldEntries.forEach(([field, students], index) => {
            const isLast = index === fieldEntries.length - 1;
            res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            if (!isLast) {
                res.write('\n');
            }
        });
        
        res.end();
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).send('Cannot load the database');
        }
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const filePath = 'database.csv';
    const { major } = req.params;
    res.set('Content-Type', 'text/plain');

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(filePath);
      const students = studentsByField[major];

      if (students) {
        res.status(200).send(`List: ${students.join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
