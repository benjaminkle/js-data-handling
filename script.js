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
