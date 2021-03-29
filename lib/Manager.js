const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super()
    }

    getRole = () => 'Manager'
}