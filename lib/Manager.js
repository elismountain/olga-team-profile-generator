// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
44
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager; 

// let employee4 = new Manager( "Olya", 300, "olya@mail.ru", "077777777");

// console.log( employee4.getName());
// console.log( employee4.getId());
// console.log( employee4.getEmail());
// console.log (employee4.getPhone());