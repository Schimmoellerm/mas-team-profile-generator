const Employee = require ("../lib/Employee");

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const employee = new Employee(name, id, email);
        
        expect(employee.name).toEqual('Mitch Schimmoeller');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('schimmoellerm@gmail.com');
        expect(employee.getName()).toEqual('Mitch Schimmoeller');
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toEqual('schimmoellerm@gmail.com');
        expect(employee.getRole()).toEqual('Employee');
    });
});
