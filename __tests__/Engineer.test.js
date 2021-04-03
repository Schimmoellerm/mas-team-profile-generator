const Employee = require ("../lib/Employee");
const Engineer = require ("../lib/Engineer");

describe("Employee Class", () => {
    it("Creates an object called employee", () => {
        const name = 'Mitch Schimmoeller';
        const id = 1;
        const email = 'schimmoellerm@gmail.com';
        const gitHub = 'https://github.com/Schimmoellerm';
        const engineer = new Engineer(name, id, email, gitHub);
        
        expect(engineer.name).toEqual('Mitch Schimmoeller');
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('schimmoellerm@gmail.com');
        expect(engineer.github).toEqual('https://github.com/Schimmoellerm')
        expect(engineer.getName()).toEqual('Mitch Schimmoeller');
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toEqual('schimmoellerm@gmail.com');
        expect(engineer.getRole()).toEqual('Engineer');
        expect(engineer.getGithub()).toEqual('https://github.com/Schimmoellerm')
    });
});