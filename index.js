// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require("colors");
const generateMarkdown = require("./generateMarkdown");

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
