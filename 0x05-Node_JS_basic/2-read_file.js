const fs = require('fs');

const countStudents = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');

        const lines = data.split('\n');

        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }
        
        const header = lines[0].split(',');
        const students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

        const fields = {};

        // Process each student line
        students.forEach(student => {
        const details = student.split(',');
        const field = (details[details.length - 1]).trim();
        const firstName = details[0];

        if (!fields[field]) {
            fields[field] = [];
        }
        fields[field].push(firstName);
        })

        for (const [field, students] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;