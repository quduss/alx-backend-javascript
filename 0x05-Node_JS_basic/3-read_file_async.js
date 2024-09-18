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

    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(`Number of students in CS: ${csCount}. ${csList}`);
    console.log(`Number of students in SWE: ${sweCount}. ${sweList}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
