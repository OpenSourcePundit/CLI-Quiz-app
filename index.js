var readlineSync = require('readline-sync');
var score = 0;
var topPlayer = {
  name: "xyz",
  score: 0
}
var quiz = [{
  no: 1,
  question: "What is always coming but never arrives?",
  answer: "tomorrow"
}, {
  no: 2,
  question: "What gets wetter the more it dries?",
  answer: "towel"
}, {
  no: 3,
  question: "What word is spelled incorrectly in every single dictionary?",
  answer: "incorrectly"
}, {
  no: 4,
  question: "What has a face and two hands, but no arms or legs?",
  answer: "clock"
}, {
  no: 5,
  question: "Some months have 31 days, others have 30 days, but how many have 28 days?",
  answer: "12"
}, {
  no: 6,
  question: "What goes up and down, but always remains in the same place?",
  answer: "stairs"
}, {
  no: 7,
  question: "What 5-letter word becomes shorter when you add two letters to it?",
  answer: "short"
}
];

var userName = readlineSync.question("Hey, Lets play a fun Quiz, May i know how the world Calls you ?");
console.log("Well ! " + userName + " Lets shoot !! try grabbing maximum points.");

for (i = 0; i < quiz.length; i++) {
  console.log(" ");
  console.log("Lets go for Question number " + quiz[i].no + ":");
  var userAnswer = readlineSync.question(quiz[i].question);

  if (userAnswer.toUpperCase() == quiz[i].answer.toUpperCase()) {
    score++;
    console.log("Yes!!," + userName + "! you are Right.")
  }
  else {
    console.log(" Oopss!! " + userName + "!! Its a worng answer.Correct answer is " + quiz[i].answer + " .")
  }
}
console.log(" ");
console.log("Quiz is completed. Your final score is " + score);
if (topPlayer.score <= score) {
  topPlayer.name = userName;
  topPlayer.score = score;
  console.log(" ");
  console.log("HURRRAAHHH..!! You are the top Scorer !!");
}
else {
  console.log(" ");
  console.log("Top Scorer is : " + topPlayer.name + " with a score of " + topPlayer.score);
}
