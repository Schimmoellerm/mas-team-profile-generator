const Employee = require ("../lib/Employee");
const Intern = require ("../lib/Intern");

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const school = 'University of Findlay';
        const intern = new Intern(name, id, email, school);
        
        expect(intern.name).toEqual('Mitch Schimmoeller');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('schimmoellerm@gmail.com');
        expect(intern.school).toEqual('University of Findlay')
        expect(intern.getName()).toEqual('Mitch Schimmoeller');
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toEqual('schimmoellerm@gmail.com');
        expect(intern.getRole()).toEqual('Intern');
        expect(intern.getSchool()).toEqual('University of Findlay')
    });
});