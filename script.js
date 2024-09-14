const students = [
    { name: 'Vicky', marks: 85, class: '10th Grade', address: 'Lucknow' },
    { name: 'Sanjeet Kumar', marks: 92, class: '11th Grade', address: 'Pune' },
    { name: 'Shaan Raza', marks: 78, class: '10th Grade', address: 'Delhi' },
    { name: 'Abhishekh Kumar', marks: 88, class: '12th Grade', address: 'Kolkata' },
    { name: 'Kuldeep Dakhad', marks: 95, class: '11th Grade', address: 'Chennai' },
    { name: 'Shivansh Gupta', marks: 95, class: '11th Grade', address: 'Anand Nagar' },
    { name: 'Amit Pawar', marks: 95, class: '11th Grade', address: 'Hyderabad' },
    { name: 'Akshay Mankr', marks: 95, class: '11th Grade', address: 'Mumbai' },
    { name: 'Amar Mishra', marks: 95, class: '11th Grade', address: 'Jaipur' },
    { name: 'Vivek Kumar', marks: 95, class: '11th Grade', address: 'Ahmedabad' },
    { name: 'Tarun Agrwal', marks: 95, class: '11th Grade', address: 'Indore' },
    { name: 'Aman Tyagi', marks: 95, class: '11th Grade', address: 'Surat' }
];

// Function to render student records
function renderStudents(studentArray) {
    const studentList = document.getElementById('container');
    studentList.innerHTML = ''; // Clear previous results

    if (studentArray.length === 0) {
        studentList.innerHTML = `<h2>No students found</h2>`;
        return;
    }

    studentArray.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('Student');

        studentCard.innerHTML = `
            <div class="student-card">
                <h4><strong>Name:</strong> ${student.name}</h4>
                <h4><strong>Marks:</strong> ${student.marks}</h4>
                <h4><strong>Class:</strong> ${student.class}</h4>
                <h5><strong>Address:</strong> ${student.address}</h5>
            </div>
        `;
        
        studentList.appendChild(studentCard);
    });
}

renderStudents(students);

document.getElementById('S-btn').addEventListener('click', function () {
    const searchText = document.getElementById('search').value.toLowerCase();

    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().startsWith(searchText)
    );

    renderStudents(filteredStudents);
});