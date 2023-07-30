const inquirer = require('inquirer');

const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your ReadME?',
    },
    {
      type: 'input',
      message: 'Provide a brief project overview and description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide installation instructions for your app.',
      name: 'installation',
      
    },
    {
    type: 'input',
    message: 'What is the usage information?',
    name: 'usage',
        
      },
    {
    type: 'input',
    message: 'What are the controbitution guidelines?',
    name: 'contribution',
      
      },

    {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test',
          
    },

   
   { 
    type: 'list',
    message: 'What license was used for this app?',
    name: 'license',
    choices:  ['PD', 'CC Zero', 'CC-BY', 'MIT']
                
    },

    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
              
    },

    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
          
    },
  ])






// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
