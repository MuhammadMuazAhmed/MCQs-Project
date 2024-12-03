#!/usr/bin/node env

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { promises } from "dns";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcome() {
  let title = chalkAnimation.rainbow("Let's start Quiz");
  await sleep();
  title.stop();
}
await welcome();
async function name() {
  let answers = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your name",
    },
  ]);
}
await name();
async function mcqs() {
  let counter = 0;
  await inquirer
    .prompt([
      {
        type: "list",
        name: "Q1",
        message: "Capital Of Pakistan",
        choices: ["Islamabad", "Karachi", "Lahore"],
      },
      {
        type: "list",
        name: "Q2",
        message: "Capital Of Srilanka",
        choices: ["Colombo", "kandy", "Galle"],
      },
      {
        type: "list",
        name: "Q3",
        message: "Capital Of India",
        choices: ["Mumbai", "Dehli", "kolkata"],
      },
      {
        type: "list",
        name: "Q4",
        message: "Capital Of Turkiye",
        choices: ["Istanbul", "Ankara", "Antalya"],
      },
      {
        type: "list",
        name: "Q5",
        message: "Capital Of China",
        choices: ["Beijing", "Shangai", "Tianjin"],
      },
    ])
    .then((answers) => {
      {
        if (answers.Q1 == "Islamabad") {
          console.log(chalk.green("Correct Answer!"));
          counter++;
        } else {
          console.log(chalk.red("wrong answer"));
          console.log(chalk.red("Islamabad is Correct answer"));
        }
      }
      {
        if (answers.Q2 == "Colombo") {
          console.log(chalk.green("Correct Answer!"));
          counter++;
        } else {
          console.log(chalk.red("wrong answer"));
          console.log(chalk.red("Colombo is Correct answer"));
        }
      }
      {
        if (answers.Q3 == "Dehli") {
          console.log(chalk.green("Correct Answer!"));
          counter++;
        } else {
          console.log(chalk.red("wrong answer"));
          console.log(chalk.red("Dehli is Correct answer"));
        }
      }
      {
        if (answers.Q4 == "Ankara") {
          console.log(chalk.green("Correct Answer!"));
          counter++;
        } else {
          console.log(chalk.red("wrong answer"));
          console.log(chalk.red("Ankara is Correct answer"));
        }
      }
      {
        if (answers.Q5 == "Beijing") {
          console.log(chalk.green("Correct Answer!"));
          counter++;
        } else {
          console.log(chalk.red("wrong answer"));
          console.log(chalk.red("Beijing is Correct answer"));
        }
      }
    });
  if (counter == 1) {
    console.log(chalk.red("you have scored 1 out of 5"));
  }
  if (counter == 2) {
    console.log(chalk.red("you have scored 2 out of 5"));
  }
  if (counter == 3) {
    console.log(chalk.greenBright("Good!.you have scored 3 out of 5"));
  }
  if (counter == 4) {
    console.log(chalk.greenBright("Great!.you have scored 4 out of 5"));
  }
  if (counter == 5) {
    console.log(chalk.greenBright("Excellent!.you have scored 5 out of 5"));
  }
}
await mcqs();
