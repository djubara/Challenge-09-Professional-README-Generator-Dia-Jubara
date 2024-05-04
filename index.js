// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require("colors");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installInstructions",
    },
    {
        type: "input",
        message: "What is the usage of the application?",
        name: "usage",
    },
    {
        type: "input",
        message: "How to contribute?",
        name: "contribute"
    },
    {
        type: "list",
        message: "What license do you require?",
        name: "license",
        choices: [
            "Eclipse",
            "GNU",
            "IBM",
            "MIT",
            "None",
        ]
    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "test"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "userName",
    },
    {
        type: "input",
        message: "Enter your email address?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, utf32) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (err) {
        console.log(err ? err : "README Successfully Written!");
    });
}
// function to initialize program and create README file
function init() {
    inquirer.prompt(questions).then(function (data) {
        const fileName = "dist/README.md";
        writeToFile(fileName, data);
    });
}

// function call to initialize program
init();
