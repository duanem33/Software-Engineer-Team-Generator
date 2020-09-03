const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = "./lib/Intern";
const Manager = "./lib/Manager";

const prompt = require("prompt");
const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const until = require("until");
// const writeFileAsync = promisify(fs.writeFile);

// function devTeamMap(){

devTeamMap();

function devTeamMap() {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "teamName",
				message: "What is your Development Team name?",
			},
			{
				type: "input",
				name: "engCount",
				message: "Number of Engineers on your team?",
			},
			{
				type: "input",
				name: "intCount",
				message: "Number of Interns on your team?",
			},
			{
				type: "input",
				name: "managerName",
				message: "What is the Manager's name?",
			},
			{
				type: "input",
				name: "managerId",
				message: "What is the Manager's Id?",
			},
			{
				type: "input",
				name: "managerEmail",
				message: "What is the Manager's email?",
			},
			{
				type: "input",
				name: "managerOfficeNumber",
				message: "What is the Manager's office number?",
			},
			{
				type: "input",
				name: "engineerName",
				message: "What it the Engineer name?",
			},
			{
				type: "input",
				name: "engineerId",
				message: "What is the Engineer Id?",
			},
			{
				type: "input",
				name: "engineerEmail",
				message: "What is the Engineer email?",
			},
			{
				type: "input",
				name: "engineerGithub",
				message: "What is the Engineer Github?",
			},
			{
				type: "input",
				name: "internName",
				message: "What is the Intern name?",
			},
			{
				type: "input",
				name: "internId",
				message: "What is the Intern Id?",
			},
			{
				type: "input",
				name: "internEmail",
				message: "What is the Intern email?",
			},
			{
				type: "input",
				name: "internSchool",
				message: "What school does the Intern attend?",
			},
		])

		.then(function (answers) {
			console.log(answers);
			let mainHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
        `;

			let teamHtml = `
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">${answers.teamName}</h1>
            <p class="lead">Number of Engineers:${answers.engCount}</p>
            <p class="lead">Number of Interns:${answers.intCount}</p>
        </div>
        </div>
        `;
			mainHtml += teamHtml;

			let managerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name:${answers.managerName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Email:${answers.managerEmail}</h6>
            <p class="card-text">Id:${answers.managerId}</p>
            <p class="card-text">Office#${answers.managerOfficeNumber}</p>
        </div>
        </div>
        `;
			mainHtml += managerHtml;
			let engineerHtml = "";
			for (let i = 0; i < answers.engCount; i++) {
				let engineerCard = `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name:${answers.engineerName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Email:${answers.engineerEmail}</h6>
            <p class="card-text">Id:${answers.engineerId}</p>
            <p class="card-text">Github user name:${answers.engineerGithub}</p>
        </div>
        </div>
            `;
				engineerHtml += engineerCard;
			}
			mainHtml += engineerHtml;

			let internHtml = "";
			for (let i = 0; i < answers.engCount; i++) {
				let internCard = `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name:${answers.internName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Email:${answers.internEmail}</h6>
            <p class="card-text">Id:${answers.internId}</p>
            <p class="card-text">School:${answers.internSchool}</p>
        </div>
        </div>
            `;
				internHtml += internCard;
			}
			mainHtml += internHtml;

			mainHtml += `</body>
        </html>`;

			fs.writeFile("index.html", mainHtml, function (err) {
				if (err) throw err;
				console.log("Saved!");
			});
		});
}
