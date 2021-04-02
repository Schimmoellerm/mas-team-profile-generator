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

            {type: 'input', message: `What is the manager's email?`, name: 'managerEmail'},

            {type: 'input', message: `What is the manager's office number?`, name: 'managerOffice'},
        ])
        .then(answers => {
            teamName = answers.teamName;
            manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
            getTeam()
        })
}

const getTeam = () => {
    inquirer
        .prompt([
            {type: 'list', message: 'What type of employee would you like to add?', choices:['Engineer', 'Intern', 'Done adding employees'], name: 'employee'},            
        ])
        .then(answers => {
            if(answers.employee === 'Engineer') {
                inquirer
                    .prompt([
                        {type: 'input', message: 'What is the name of the engineer?', name: 'engineerName'},

                        {type: 'input', message: `What is the engineer's id?`, name: 'engineerId'},

                        {type: 'input', message: `What is the engineer's email?`, name: 'engineerEmail'},

                        {type: 'input', message: `What is the engineer's github?`, name: 'engineerGithub'},
                    ])
                    .then(answers => {
                        engineersArr.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub))
                        getTeam()
                    })
            }else if (answers.employee === 'Intern') {
                inquirer
                .prompt([
                    {type: 'input', message: 'What is the name of the intern?', name: 'internName'},

                    {type: 'input', message: `What is the intern's id?`, name: 'internId'},

                    {type: 'input', message: `What is the engineer's email?`, name: 'internEmail'},

                    {type: 'input', message: `What is the intern's school?`, name: 'internSchool'},
                ])
                .then(answers => {
                    internsArr.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool))
                    getTeam();
                })
            }else if (answers.employee === 'Done adding employees') {
                console.log('Creating team profile.');
                writeHTML();
            }
        })
}

const writeHTML = () => {
    console.log(teamName);
    console.log(manager);
    console.log(engineersArr);
    console.log(internsArr);
}
startTeam()