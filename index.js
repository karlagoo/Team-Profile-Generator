const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArr = []

function startApp() {
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "what is the manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is the manager's ID number?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber"
            }
        ].then(answers => {

        }))

    }
    function addEngineer() {
        inquirer.prompt([ 
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the engineer's ID number?",
                name: "enginnerId"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "engineerGithub"
            },

        ].then(answers =>{

        }))

    }
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the intern's ID number?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What university did the intern attend?",
                name: "internSchool"
            },
        ])

    }

}