// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkDown.js");

// TODO: Create an array of questions for user input
const questions = [
	{
		name: "title",
		type: "input",
		message: "What is the name of your project?",
	},
	{
		name: "Description",
		type: "input",
		message: "Input a decsription for the project",
	},
	{
		name: "Installation",
		type: "input",
		message: "How to install",
	},
	{
		name: "Usage",
		type: "input",
		message: "How to use the application",
	},
	{
		name: "Contributions",
		type: "input",
		message: "Input contributions",
	},
	{
		name: "License",
		messgae: "Select license type from options listed below",
		type: "list",
		choices: [
			"Apache License 2.0",
			"GNU General Public License v3.0",
			"MIT License",
			'BSD 2-Clause "Simplified" License',
			'BSD 3-Clause "New" or "Revised" License',
			"Boost Software License 1.0",
			"Creative Commons Zero v1.0 Universal",
			"Eclipse Public License 2.0",
			"GNU Affero General Public License v3.0",
			"GNU General Public License v2.0",
			"GNU Lesser General Public License v2.1",
			"Mozilla Public License 2.0",
			"The Unlicense",
		],
	},
	{
		name: "Test",
		type: "input",
		message: "Input test intsructions",
	},
	{
		name: "Github",
		type: "input",
		message: "Enter your github username below.",
	},
	{
		name: "Email",
		type: "input",
		message: "Pleae enter your email.",
	},
];

// TODO: Create a function to write README file
writeToFile = function (data, fileName) {};

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		fs.writeFile("readmeSample.md", generateMarkDown(answers), (err) =>
			err ? console.log(err) : console.log("success")
		);
	});
}

// Function call to initialize app
init();
