const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer');
const fs = require('fs');

let teamName;
let manager;
let engineersArr = [];
let internsArr = [];

const startTeam = () => {
    inquirer
        .prompt([
            {type: 'input', message: 'What is the name of your team?', name: 'teamName'},

            {type: 'input', message: 'What is the name of the manager?', name: 'managerName'},

            {type: 'input', message: `What is the manager's id?`, name: 'managerId'},

            {type: 'input', message: `Waht is the manager's email?`, name: 'managerEmail'},

            {type: 'input', message: `What is the manager's office number?`, name: 'managerOffice'},
        ])
        .then(answers => {
            teamName = answers.teamName;
            manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
            console.log(teamName, manager)
        })
}
startTeam()