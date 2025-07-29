// Part 1: Understanding and Creating Object
// Creating the student object
const student = {
  name: "Khoa Le",
  age: 31,
  enrolled: true,
  courses: [
    "Cybersecurity Fundamentals",
    "Network Security",
    "Ethical Hacking",
  ],

  // Method to display basic student information
  displayInfo: function () {
    return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${
      this.enrolled
    }, Courses: ${this.courses.join(", ")}`;
  },
};

// Output name and age
console.log("Name:", student.name);
console.log("Age:", student.age);

// Output result of calling the method
console.log(student.displayInfo());
console.log();

// Part 2: Working with JSON
// Convert the student object into a JSON string
const jsonString = JSON.stringify(student);

// Log the JSON string to the console
console.log("JSON String:", jsonString);

// Convert the JSON string back into a JavaScript object
const newStudent = JSON.parse(jsonString);

// Log the newly created object and compare it to the original
console.log("Parsed Object:", newStudent);
console.log(
  "Are Original and Parsed the same?",
  student.name === newStudent.name &&
    student.age === newStudent.age &&
    student.enrolled === newStudent.enrolled &&
    JSON.stringify(student.courses) === JSON.stringify(newStudent.courses)
);
console.log();
// Part 3: Using destructuring Assignment
// Destructure an object in ES6
const student2 = {
  name: "Khoa Le",
  age: 31,
  enrolled: true,
  courses: ["Web Developing", "Database Design", "JavaScript"],
  displayInfo: function () {
    return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${
      this.enrolled
    }, Courses: ${this.courses.join(", ")}`;
  },
};

// Destructuring name and courses
const { name, courses } = student2;

console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);
