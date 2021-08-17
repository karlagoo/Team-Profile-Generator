const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const create = require('./src/page-template')

const teamArr = []

function startApp() {
    console.log("Let's set up your team!")
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
            },
            {
                type: "list",
                message: "What team member would you like to add next?",
                choices: ["Intern", "Engineer", "done"],
                name: "nextSelection"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamArr.push(manager);
            if (answers.nextSelection === "Intern") {
                addIntern()
            } else if (answers.nextSelection === "Engineer") {
                addEngineer()
            } else {
                completeSetup()
            }
        })

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
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "github"
            },
            {
                type: "list",
                message: "What team member would you like to add next?",
                choices: ["Intern", "Engineer", "done"],
                name: "nextSelection"
            }

        ]).then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teamArr.push(engineer);
            if (answers.nextSelection === "Intern") {
                addIntern()
            } else if (answers.nextSelection === "Engineer") {
                addEngineer()
            } else {
                completeSetup()
            }

        })

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
                name: "school"
            },
            {
                type: "list",
                message: "What team member would you like to add next?",
                choices: ["Intern", "Engineer", "done"],
                name: "nextSelection"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            teamArr.push(intern);
            if (answers.nextSelection === "Intern") {
                addIntern()
            } else if (answers.nextSelection === "Engineer") {
                addEngineer()
            } else {
                completeSetup()
            }
        })

    }
addManager()
}
function completeSetup() {    
    fs.writeFileSync(path.join('./dist', 'team.html'), create(teamArr), "utf-8");
    console.log("Successfully created file team.html in ./dist");
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to see the contents of the file you just created?",
            choices: ["Yes please", "No thank you"],
            name: "response"
        }
    ]).then(answer => {
        if (answer.response == "Yes please") {
            console.log(fs.readFileSync('./dist/team.html', 'utf-8'));
        } 
        console.log("Thank you, have a great day!");
    })
};

startApp();