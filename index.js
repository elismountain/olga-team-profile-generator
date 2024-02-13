
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const teamArray = [];


const createManager = () => {
    console.log('Please, build your team');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Who is the manager on this team?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Please, enter the manager name');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log('Please, enter the manager ID');
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: officeInput => {
                if(isNaN(officeInput)) {
                    console.log('Please, enter the office number');
                    return false;
                } else {
                    return true;
                }
            } 
        }, 
    ])
    .then((answers) => {
        const manager = new Manager (answers.managerName, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager); 
        createTeam();
    })
};



function createEngineer() {
    console.log('Please build your engineer');
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineers name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please, enter the employer name');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineers id?",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log('Please, enter the manager ID');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineers email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineers gitHub?",
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please, enter the employer gitHub');
                }
            }
        },
    ])

        .then((answers) => {
            //stores answer in new engineer object 
            const engineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github)
            teamArray.push(engineer)
            // calls create team function
            createTeam()
        })
}

// Function to create an intern
// Asks for a name, id, email, and school
function createIntern() {
    console.log('Please build your intern');
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is your interns name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please, enter the employer name');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your interns id?",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log('Please, enter the manager ID');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your interns email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your interns school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please, enter the employer school');
                }
            }
        },
    ])
        // when answers received, add to variable and push to team members array
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.id, answers.email, answers.school)
            teamArray.push(intern)
            createTeam()
        })

}

// function to ask if manager wants to create a team member after creating their initial manager profile
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: "What team profile would you like to create?",
            choices: ['Intern', 'Engineer', 'Finish builing the team']
        },
    ]).then(answers => {
        // A condition to check which employee choice the user selected and run appropriate function
        if (answers.employeeChoice === 'Intern') {
            createIntern();
        } else if (answers.employeeChoice === 'Engineer') {
            createEngineer();
        } else {
            fs.writeFileSync('./team.html', render(teamArray), 'utf-8');
    }})
}


// Call the createManager function to initialize the app.

    createManager()
