interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Keith",
  lastName: "Steve",
  age: 24,
  location: "Nairobi"
}

const student2: Student = {
  firstName: "Kelsey",
  lastName: "Jane",
  age: 19,
  location: "Los Angeles"
}

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Iterate over the studentsList and create rows
  studentsList.forEach(student => {
    const row = document.createElement('tr');

    // Create cells for firstName and location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the tbody
    tbody.appendChild(row);
  });

  // Append the tbody to the table
  table.appendChild(tbody);

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable();
