// TODO: Write code to define and export the Employee class


class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

export default Employee;

// let employee1 = new Employee( "Jared", 123, "jared@mail.ru");

// console.log( employee1.getName());
// console.log( employee1.getId());
// console.log( employee1.getEmail());


