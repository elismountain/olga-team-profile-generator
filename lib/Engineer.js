// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.4

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;

    }

    getGithub(){ 
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer; 


// let employee2 = new Engineer( "Jared", 123, "jared@mail.ru", "githubname");

// console.log( employee2.getName());
// console.log( employee2.getId());
// console.log( employee2.getEmail());
// console.log (employee2.getGitHub())


