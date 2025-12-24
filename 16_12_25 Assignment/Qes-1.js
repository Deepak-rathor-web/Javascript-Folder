var students = [];

function addStudent(name) {
    if (students.includes(name)) {
        alert("Student already exists");
    } else {
        students.push(name);
        alert("Student added");
    }
}

function viewStudents() {
    alert(students.length === 0 ? "No students" : students.join(", "));
}

function updateStudent(oldName, newName) {
    var index = students.indexOf(oldName);
    if (index !== -1) {
        students[index] = newName;
        alert("Student updated");
    } else {
        alert("Student not found");
    }
}

function deleteStudent(name) {
    var index = students.indexOf(name);
    if (index !== -1) {
        students.splice(index, 1);
        alert("Student removed");
    } else {
        alert("Student not found");
    }
}

function searchStudent(name) {
    alert(students.includes(name) ? "Student found" : "Student not found");
}

function countStudents() {
    alert("Total students: " + students.length);
}

function sortStudents() {
    students.sort();
    alert("Sorted List: " + students.join(", "));
}

function clearAllStudents() {
    students = [];
    alert("All students cleared");
}

// Menu
while (true) {
    var choice = prompt(
        "1.Add\n2.View\n3.Update\n4.Delete\n5.Search\n6.Count\n7.Sort\n8.Clear\n9.Exit"
    );

    if (choice == 1) addStudent(prompt("Enter name"));
    else if (choice == 2) viewStudents();
    else if (choice == 3) updateStudent(prompt("Old name"), prompt("New name"));
    else if (choice == 4) deleteStudent(prompt("Enter name"));
    else if (choice == 5) searchStudent(prompt("Enter name"));
    else if (choice == 6) countStudents();
    else if (choice == 7) sortStudents();
    else if (choice == 8) clearAllStudents();
    else if (choice == 9) break;
    else alert("Invalid choice");
}
