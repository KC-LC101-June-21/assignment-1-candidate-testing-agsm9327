const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = ["Who was the first American woman in space?"];
let correctAnswer = ["Correct Answer: Sally Ride"];
let candidateAnswer = [""];

let questions = ["True or False: 5 kilometer == 5000 meters?"];
let correctAnswers = ["true"];
let candidateAnswers = "";

let question3 = ["(5 + 3)/2 * 10 = ?"];
let correctAnswer3 = ["40"];
let candidateAnswer3 = ["40"];

let question4 = ["Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?"];
let correctAnswer4 = ["Trajectory"];
let candidateAnswer4 = ["Trajectory"];

let question5 = ["What is the minimum crew size for the ISS?"];
let correctAnswer5 = ["3"];
let candidateAnswer5 = ["3"];

let allQuestions = [question, questions, question3, question4, question5];

function askForName() {
  candidateName = input.question("What is your name?");
  // TODO 1.1b: Ask for candidate's name 
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   let questionsAsked = input.question();

for (let i = 0; i < questionsAsked.length; i++) {
  console.log(questionsAsked);
}
}

function gradeQuiz() {
  candidateAnswer = input.question(correctAnswer);

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // console.log(` Jane answered her first question as ${question}, her 2nd question as ${questions}, her 3rd as ${question3}, her 4th as ${question4}, and her 5th as ${question5}`);

  // console.log(` The correct answers to question 1 is ${correctAnswer}, question 2 is ${correctAnswers}, question 3 is ${correctAnswer3}, question 4 is ${correctAnswer4}, and question 5 is ${correctAnswer5}`);

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
