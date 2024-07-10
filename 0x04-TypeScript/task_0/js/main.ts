interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
  };

const studentsList: Student[] = [student1, student2];
  // Render the table using Vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Get the table element or create one if it doesn't exist
    let table = document.getElementById('studentsTable') as HTMLTableElement;
  
    if (!table) {
      table = document.createElement('table');
      table.id = 'studentsTable';
      document.body.appendChild(table);
    }
  
    // Create table headers
    const headers = ['First Name', 'Location'];
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
  
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
  
    // Append a new row for each student in the studentsList array
    const tbody = document.createElement('tbody');
    studentsList.forEach(student => {
      const row = tbody.insertRow();
  
      const cell1 = row.insertCell();
      cell1.textContent = student.firstName;
  
      const cell2 = row.insertCell();
      cell2.textContent = student.location;
    });
  
    table.appendChild(tbody);
});