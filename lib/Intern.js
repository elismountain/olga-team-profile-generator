// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


import Employee from "../lib/Employee.js";

class Intern extends Employee {
    constructor (school) {
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};


// let employee2 = new Engineer( "Jared", 123, "jared@mail.ru", "githubname");

// console.log( employee2.getName());
// console.log( employee2.getId());
// console.log( employee2.getEmail());
// console.log (employee2.getGitHub())