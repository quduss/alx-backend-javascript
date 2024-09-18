const http = require('http');
const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');

    // eslint-disable-next-line no-unused-vars
    let csCount = 0;
    // eslint-disable-next-line no-unused-vars
    let sweCount = 0;
    const csFirstnames = [];
    const sweFirstnames = [];

    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (field === 'CS') {
        csFirstnames.push(firstname);
        csCount += 1;
      } else if (field === 'SWE') {
        sweFirstnames.push(firstname);
        sweCount += 1;
      }
    }
    const csList = `List: ${csFirstnames.join(', ')}`;
    const sweList = `List: ${sweFirstnames.join(', ')}`;

    const s1 = 'This is the list of our students\n';
    const s2 = `Number of students: ${csCount + sweCount}\n`;
    const s3 = `Number of students in CS: ${csCount}. ${csList}\n`;
    const s4 = `Number of students in SWE: ${sweCount}. ${sweList}`;

    return (s1 + s2 + s3 + s4);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2] ? process.argv[2] : '';
    try {
      const students = await countStudents(database);
      res.end(students);
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(1245);

module.exports = app;
