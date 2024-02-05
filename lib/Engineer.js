// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.4

import Employee from "../lib/Employee.js";

class Engineer extends Employee {
    constructor (github) {
        this.github = github;

    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};


// let employee2 = new Engineer( "Jared", 123, "jared@mail.ru", "githubname");

// console.log( employee2.getName());
// console.log( employee2.getId());
// console.log( employee2.getEmail());
// console.log (employee2.getGitHub())


