const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }
    else if (req.url === '/students') {
        path = process.argv[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');

        try {
            const file = await fs.readFile(path, 'utf-8');
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
        }
        catch (err) {
            res.write('Cannot load the database');
        }
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`...`);
});
