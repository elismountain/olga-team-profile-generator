// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


import Employee from "../lib/Employee.js";

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

export default {Intern};


// let employee3 = new Intern( "Chrys", 125, "chrys@mail.ru", "school");

// console.log( employee3.getName());
// console.log( employee3.getId());
// console.log( employee3.getEmail());
// console.log (employee3.getSchool());

