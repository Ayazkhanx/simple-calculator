#! /usr/bin/env node


import inquirer from "inquirer";

const ans = await inquirer.prompt([
  {
     message: "enter your First Numbr",
     type: "number", 
     name: "firstNumber" 
    },
  {
    message: " enter your Second Number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select one opertaor to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "division", "multiplication"],
  },
]
);

if (ans.operator === 'addition') {
    console.log(ans.firstNumber + ans.secondNumber);
} else if (ans.operator === 'subtraction') {
    console.log(ans.firstNumber - ans.secondNumber);
} else if (ans.operator === 'division') {
    console.log(ans.firstNumber / ans.secondNumber);
} else if (ans.operator === 'multiplication') {
    console.log(ans.firstNumber * ans.secondNumber);
} else { 
    console.log("please enter a valid nmbr")
}