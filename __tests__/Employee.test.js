const Employee = require ("../lib/Employee");
const expect = require('chai').expect

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const employee = new Employee(name, id, email);
        
        expect(employee.name).equal('Mitch Schimmoeller');
        expect(employee.id).equal(1);
        expect(employee.email).equal('schimmoellerm@gmail.com');
        expect(employee.getName()).equal('Mitch Schimmoeller');
        expect(employee.getId()).equal(1);
        expect(employee.getEmail()).equal('schimmoellerm@gmail.com');
        expect(employee.getRole()).equal('Employee');
    });
});
