// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer

/*
In addition to Employee's properties and methods(name, id, email), Engineer will also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'
*/