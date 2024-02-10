
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


// const createManager = () => {
//     console.log('Please, build your team');
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "Who is the manager on this team?",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please, enter the manager name');
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "Please enter the manager's ID.",
//             validate: idInput => {
//                 if(isNaN(idInput)) {
//                     console.log('Please, enter the manager ID');
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         },

//         {
//             type: 'input',
//             name: 'email',
//             message: "Please enter the manager's email.",
//             validate: email => {
//                 valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//                 if (valid) {
//                     return true;
//                 } else {
//                     console.log ('Please enter an email!')
//                     return false; 
//                 }
//             }
//         }, 
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: "Please enter the manager's office number",
//             validate: officeInput => {
//                 if(isNaN(officeInput)) {
//                     console.log('Please, enter the office number');
//                     return false;
//                 } else {
//                     return true;
//                 }
//             } 
//         }, 
//     ])
//     .then(managerInput => {
//         const  { name, id, email, officeNumber } = managerInput; 
//         const manager = new Manager (name, id, email, officeNumber);

//         teamArray.push(manager); 
//         console.log(manager); 
//     })
// };



const addEmployee  = () => {
    console.log(`Adding employees to the team`);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of employer?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employer id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the employee's GitHub.",
            when: (input) => input.role === 'Engineer',
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school.",
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, gitHub, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, gitHub);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        }

        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployee(teamArray) 
        } else {
            return teamArray;
        }
    })
}


addEmployee();


// // function to generate HTML page file using file system 

// const writeFile = data => {
//     fs.writeFile('../index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     })
// }; 



// createManager()
//   .then(addEmployee)
//   .then(teamArray => {
//     return generateHTML(teamArray);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//  console.log(err);
//   });

