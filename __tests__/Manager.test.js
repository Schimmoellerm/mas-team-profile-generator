const Employee = require ("../lib/Employee");
const Manager = require ("../lib/Manager");

describe("Manager Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const officeNumber = 1
        const manager = new Manager(name, id, email, officeNumber);
        
        expect(manager.name).toEqual('Mitch Schimmoeller');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('schimmoellerm@gmail.com');
        expect(manager.officeNumber).toEqual(1)
        expect(manager.getName()).toEqual('Mitch Schimmoeller');
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual('schimmoellerm@gmail.com');
        expect(manager.getRole()).toEqual('Manager');
    });
});