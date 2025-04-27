// Sample Student Data
const students = [
    { name: "Olivia", class: "JSS1", score: 85 },
    { name: "Sophia", class: "JSS1", score: 52 },
    { name: "Henry", class: "JSS2", score: 68 },
    { name: "Emily", class: "JSS2", score: 38 },
    { name: "Ethan", class: "JSS3", score: 74 },
    { name: "James", class: "JSS3", score: 49 }
];

// Group students by class
function groupByClass(students) {
    const classGroups = {};

    students.forEach(student => {
        if (!classGroups[student.class]) {
            classGroups[student.class] = [];
        }
        classGroups[student.class].push(student);
    });

    return classGroups;
}

// Get grade based on score
function getGrade(score) {
    if (score >= 70) return 'A';
    if (score >= 60) return 'B';
    if (score >= 50) return 'C';
    if (score >= 40) return 'D';
    return 'F';
}

// Group students by grade
function groupByGrade(students) {
    const gradeGroups = { A: [], B: [], C: [], D: [], F: [] };

    students.forEach(student => {
        const grade = getGrade(student.score);
        gradeGroups[grade].push(student);
    });

    return gradeGroups;
}

// Display students grouped by class
function displayByClass(groups) {
    const container = document.getElementById('classContainer');

    for (let className in groups) {
        const classDiv = document.createElement('div');
        classDiv.className = 'container';

        const title = document.createElement('h3');
        title.textContent = className;
        classDiv.appendChild(title);

        groups[className].forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.className = 'student';
            studentDiv.textContent = `${student.name} - Score: ${student.score}`;
            classDiv.appendChild(studentDiv);
        });

        container.appendChild(classDiv);
    }
}

// Display students grouped by grade
function displayByGrade(groups) {
    const container = document.getElementById('gradeContainer');

    for (let grade in groups) {
        const gradeDiv = document.createElement('div');
        gradeDiv.className = 'container';

        const title = document.createElement('h3');
        title.textContent = `Grade ${grade}`;
        gradeDiv.appendChild(title);

        groups[grade].forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.className = 'student';
            studentDiv.textContent = `${student.name} (${student.class}) - Score: ${student.score}`;
            gradeDiv.appendChild(studentDiv);
        });

        container.appendChild(gradeDiv);
    }
}

// Run when page loads
const classGroups = groupByClass(students);
displayByClass(classGroups);

const gradeGroups = groupByGrade(students);
displayByGrade(gradeGroups);
