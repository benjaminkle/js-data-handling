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
  // New method: Add course (for part 5)
  addCourse: function (newCourse) {
    this.courses.push(newCourse);
  },

  // New method: Get total number of courses (for part 5)
  getCourseCount: function () {
    return this.courses.length;
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
// Destructuring name and courses (ES6)
const { name, courses } = student;

console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);
// Create an array of scores
const scores = [85, 92, 78, 90];

// Destructure the first two scores
const [firstScore, secondScore] = scores;

console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);
console.log();

// Part 4: The Spread Operator
// Clone the student object
const clonedStudent = { ...student };

// Add a new property
clonedStudent.graduationYear = 2026;

// Log the cloned object
console.log("Cloned Student with Graduation Year:", clonedStudent);

// Merge two arrays
const newCourses = ["Cloud Security", "Incident Response"];
const allCourses = [...student.courses, ...newCourses];

console.log("Merged Courses:", allCourses);
console.log();

// Part 5: Object Method
student.addCourse("Firewall Setting Rules and Protection");
console.log("Updated Courses:", student.courses);

const totalCourses = student.getCourseCount();
console.log("Total Number of Courses:", totalCourses);
console.log();

//Part 6: Bonus Challenge with scores array above
// Relog scores array and Use reduce to calculate the total sum
console.log(scores);
const total = scores.reduce((sum, score) => sum + score, 0);

// Calculate average by dividing total by number of scores
const average = total / scores.length;

// Output the result
console.log("Average Score:", average);
