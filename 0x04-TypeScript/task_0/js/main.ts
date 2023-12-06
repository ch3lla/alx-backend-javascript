interface Student {
    firstName: string,
    lastName: string,
    age: Number,
    location: string
}

const firstStudent: Student = {
    firstName: "Emmanuella",
    lastName: "Chukwuma",
    age: 18,
    location: "Lagos"
}

const secondStudent: Student = {
    firstName: "Jasmine",
    lastName: "Chukwuma",
    age: 18,
    location: "Lagos"
}

const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
})