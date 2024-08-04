#! /usr/bin/env node

import inquirer from "inquirer"; // inquirer module ko import kar rahe hain
class Student {
  name; // name property define ki
  constructor(n) {
    this.name = n; // n ko name property me assign kiya
  }
}
class Person {
  students = []; // students property ko initialize kiya as an empty array
  addStudent(obj) {
    this.students.push(obj); // students array me naya student add karte hain
  }
}
const person = new Person(); // Person class ka ek instance create kiya
const programStart = async () => {
  do {
    // do-while loop start kiya
    console.log("Welcome!"); // Welcome message print kiya
    const ans = await inquirer.prompt({
      name: "select", // prompt ka name select hai
      type: "list", // prompt ka type list hai
      message: "Whom would you like to interact with?", // prompt ka message
      choices: ["Staff", "Student", "Exit"], // choices jo list me dikhayengi
    });
    if (ans.select === "Staff") {
      // agar user Staff choose kare
      console.log(
        "You approach the staff room. Please feel free to ask any questions."
      ); // Staff room ka message print
    } else if (ans.select === "Student") {
      // agar user Student choose kare
      const studentAns = await inquirer.prompt({
        name: "student", // prompt ka name student hai
        type: "input", // prompt ka type input hai
        message: "Enter the student's name you wish to engage with:", // prompt ka message
      });
      const student = person.students.find(
        (val) => val.name === studentAns.student
      ); // students array me se matching student dhoond rahe hain
      if (!student) {
        // agar student nahi milta
        const name = new Student(studentAns.student); // naya student create karte hain
        person.addStudent(name); // naya student add karte hain
        console.log(`Hello, I am ${name.name}. Nice to meet you.`); // student ko greet karte hain
        console.log("New student added."); // new student added message
        console.log("Current student list:"); // current student list message
        console.log(person.students); // current students ko print karte hain
      } else {
        // agar student mil jata hai
        console.log(`Hello, I am ${student.name}. Nice to see you again.`); // student ko greet karte hain
        console.log("Existing student list:"); // existing student list message
        console.log(person.students); // current students ko print karte hain
      }
    } else if (ans.select === "Exit") {
      // agar user Exit choose kare
      console.log("Exiting the program..."); // exiting message print
      process.exit(); // program ko exit karte hain
    }
  } while (true); // loop ko true rakhte hain taki ye continuously chale
};
programStart(); // programStart function ko call karte hain
