// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
        type:'input',
        name:'title',
        message:'What is the name of your project?'
    },
    {
        type:'input',
        name:'description',
        message:'Provide a description of your project:'
    },
    {
        type:'input',
        name:'installation',
        message:'What steps are needed to install your project, if none leave blank:'
    },
    {
        type:'input',
        name:'usage',
        message:'Provide project usage infromation:'
    },
    {
        type:'input',
        name:'contribution',
        message:'Contribution Guidelines:'
    },
    {
        type:'input',
        name:'test',
        message:'Insert test instructions for your project'
    },
    {
        type:'checkbox',
        choices: ['MIT','GNU','ISC'],
        name:'license',
        message:'What licenses do you have:'
    },
    {
        type:'input',
        name:'github',
        message:'Insert your Github name:'
    },
    {
        type:'input',
        name:'contact',
        message:'Insert your email address:'
    }
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Use the fs module to write data to a file
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('README file has been created successfully!');
    });
  }
// TODO: Create a function to initialize app
function init() {
    // Use inquirer to prompt the user with questions
    inquirer
    .prompt(questions)
    .then((answers) => {
        // Use generateMarkdown to format the content
        const formattedContent = generateMarkdown(answers);

        // Specify the filename for the README file
        const fileName = 'README.md';

        // Call the writeToFile function to create the README file
        writeToFile(fileName, formattedContent);
    })
    .catch((error) => {
        console.error('Error occurred during user input:', error);
    });
}
// Function call to initialize app
init();
