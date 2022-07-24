// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { join } from "path";


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license are you using?",
        choices: ["MIT", "Apache 2.0", "BSD 3.0"]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (join (process.cwd(),"/example/", fileName),data)
}


function renderLicenseBadge(license) {
    if (license === "MIT" ) {
        return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
    }
}

function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
  `;
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile ("README.md", generateMarkdown(answers))
    })
}


// Function call to initialize app
init();

