import inquirer, { Answers, ChoiceOptions, Question } from "inquirer";
const files = ["name.csv", "hello.csv", "sabbir.csv"];
const questions: Answers = [
  {
    type: "list",
    name: "filename",
    message: "Select your CSV file name:",
    choices: files,
  },
  {
    type: "input",
    name: "destination",
    message: "Enter your destination file name:",
  },
];
(async () => {
  const { filename, destination } = await inquirer.prompt<Answers>(questions);
  console.log("f: ", filename);
  console.log("d: ", destination);
})();
