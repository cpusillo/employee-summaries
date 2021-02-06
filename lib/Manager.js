// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        this (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}   

module.exports = Manager;

/*
In addition to Employee's properties and methods, Manager will also have:

officeNumber

getRole() // Overridden to return 'Manager'
*/