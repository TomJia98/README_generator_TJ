// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'projectDesc',
    message: 'Please provide a description of your project',
  },
  {
    type: 'input',
    name: 'projectInstall',
    message: 'Please provide installation instructions',
  },
   {
    type: 'input',
    name: 'projectUsage',
    message: 'Please describe how to use your project',
  },
  {
    type: 'list',
    message: 'Which license are you using?',
    name: 'projectLicense',
    choices: ['email', 'phone', 'telekinesis'],// add license choices here
},
{
    type: 'input',
    name: 'projectContribute',
    message: 'Please describe your contribution guidelines',
  },
  {
    type: 'input',
    name: 'projectTest',
    message: 'Please describe your test instructions',
  },
  {
    type: 'input',
    name: 'projectQuestionsEmail',
    message: 'Please enter your preferred email address',
  },
  {
    type: 'input',
    name: 'projectQuestionsGithub',
    message: 'Please enter your Github username',
  },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
