// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions) 
  * [License](#license)
  * [Questions](#questions)
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contribution Guidelines 
  ${data.contribution}
  ## Test Instructions 
  ${data.test}
  ## License 
  ${data.license}
  ## Questions 
  For questions please contact me via: 
  ${data.github}
  ${data.email}



`;
}

module.exports = generateMarkdown;
