const Employee = require ("../lib/Employee");
const Engineer = require ("../lib/Engineer");
const expect = require('chai').expect;

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const gitHub = 'https://github.com/Schimmoellerm';
        const engineer = new Engineer(name, id, email, gitHub);
        
        expect(engineer.name).equal('Mitch Schimmoeller');
        expect(engineer.id).equal(1);
        expect(engineer.email).equal('schimmoellerm@gmail.com');
        expect(engineer.github).equal('https://github.com/Schimmoellerm')
        expect(engineer.getName()).equal('Mitch Schimmoeller');
        expect(engineer.getId()).equal(1);
        expect(engineer.getEmail()).equal('schimmoellerm@gmail.com');
        expect(engineer.getRole()).equal('Engineer');
        expect(engineer.getGithub()).equal('https://github.com/Schimmoellerm')
    });
});