const fs = require('fs');

function countStudents(db) {
  if (!fs.existsSync(db)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(db, 'utf8');
  const lines = data.trim().split('\n');

  let csCount = 0;
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

  console.log(`Number of students: ${csCount + sweCount}`);
  console.log(`Number of students in CS: ${csCount}. ${csList}`);
  console.log(`Number of students in SWE: ${sweCount}. ${sweList}`);
}
module.exports = countStudents;
