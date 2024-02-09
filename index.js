
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamArray = [];


const createManager = () => {
    console.log('Please, build your team');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Who is the menager on this team?",
            validate: nameInput => {
                if (nameInput) {
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
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
}


createManager();

