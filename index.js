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
let htmlArr = [];

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

    htmlArr.push(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" 
              rel="stylesheet" 
              integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" 
              crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="card">
                <div class="card-body text-center customTitle">
                    <h1>${teamName}</h1>
                </div>
            </div>
        </div>`);

    htmlArr.push(`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">Employee ID: ${manager.id}</p>
      <p class="card-text">Office Number: ${manager.officeNumber}</p>
      <a href="${manager.email}" class="card-link">${manager.email}</a>
    </div>
  </div>`);

  for (let i=0; i<engineersArr.length; i++) {
    htmlArr.push(`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineersArr[i].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">Employee ID: ${engineersArr[i].id}</p>
      <a href="https://github.com/${engineersArr[i].github}" class="card-link">GitHub</a>
      <a href="
    </div>
  </div>`);
  }

  //console.log(htmlArr)
    
}
startTeam()