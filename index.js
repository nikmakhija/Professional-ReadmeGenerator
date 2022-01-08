const fs = require("fs")
const inquirer = require("inquirer")
const { right } = require("inquirer/lib/utils/readline")
const path = require("path")
const generate = require("./utils/generatemarkdown")

const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your github username",
    },
    {
        type: "input",
        name: "title",
        message: "what is your project's title",
    },
    {
        type: "input",
        name: "description",
        message: "what is your project's description",  
    },
    {
        type: "input",
        name: "installation",
        message: "how do you install your project",
    },
    {
        type: "input",
        name: "information",
        message: "what is your project's information",
    },
    {
        type: "input",
        name: "guidelines",
        message: "what is your project's guidelines",
    },
    {
        type: "input",
        name: "instructions",
        message: "what is your project's test instructions",
    },
    {
        type: "input",
        name: "license",
        message: "what is your license for your application",
    },
    {
        type: "input",
        name: "email",
        message: "what is your email",
    },
    {
        type: "input",
        name: "contributors",
        message: "do you have contributors",
    },
]

function writetoFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data)
}

function start() {
    inquirer.prompt(questions).then(responses => {
        console.log("generating readme")
        writetoFile("README.md", generate({ ...responses}))
    })
}

start()