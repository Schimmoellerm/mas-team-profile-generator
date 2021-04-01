const Employee = require ("../lib/Employee");
const Manager = require ("../lib/Manager");
const expect = require('chai').expect;

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const officeNumber = 1
        const manager = new Manager(name, id, email, officeNumber);
        
        expect(manager.name).equal('Mitch Schimmoeller');
        expect(manager.id).equal(1);
        expect(manager.email).equal('schimmoellerm@gmail.com');
        expect(manager.officeNumber).equal(1)
        expect(manager.getName()).equal('Mitch Schimmoeller');
        expect(manager.getId()).equal(1);
        expect(manager.getEmail()).equal('schimmoellerm@gmail.com');
        expect(manager.getRole()).equal('Manager');
    });
});