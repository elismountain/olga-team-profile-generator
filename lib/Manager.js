// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
44
import Employee from "../lib/Employee.js";

class Manager extends Employee {
    constructor (name, id, email, phone) {
        super (name, id, email);
        this.phone = phone;

    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return 'Manager';
    }
};

export default {Manager};

// let employee4 = new Manager( "Olya", 300, "olya@mail.ru", "077777777");

// console.log( employee4.getName());
// console.log( employee4.getId());
// console.log( employee4.getEmail());
// console.log (employee4.getPhone());