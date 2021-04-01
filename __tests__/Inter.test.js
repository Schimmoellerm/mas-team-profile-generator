const Employee = require ("../lib/Employee");
const Intern = require ("../lib/Intern");
const expect = require('chai').expect;

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const school = 'University of Findlay';
        const intern = new Intern(name, id, email, school);
        
        expect(intern.name).equal('Mitch Schimmoeller');
        expect(intern.id).equal(1);
        expect(intern.email).equal('schimmoellerm@gmail.com');
        expect(intern.school).equal('University of Findlay')
        expect(intern.getName()).equal('Mitch Schimmoeller');
        expect(intern.getId()).equal(1);
        expect(intern.getEmail()).equal('schimmoellerm@gmail.com');
        expect(intern.getRole()).equal('Intern');
        expect(intern.getSchool()).equal('University of Findlay')
    });
});