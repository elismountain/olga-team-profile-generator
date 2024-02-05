// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
44
import Employee from "../lib/Employee.js";

class Manager extends Employee {
    constructor (phone) {
        this.phone = phone;

    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return 'Manager';
    }
};