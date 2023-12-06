import readlineSync from "readline-sync"
// taking input from user through name
const userName = readlineSync.question("What is your name ?")
console.log("Welcome", userName.toUpperCase(), "😀", "Test your IQ here😎")
let score = 0
// procesing part via function

function play(question, answer) {
  const userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log("You are right✅")
    score = score + 1
    console.log("Your current score is:", score)
  } else {
    console.log("You are wrong❌")
    score = score - 1
    console.log("Your current score is:", score)

  }
  console.log("----------")
}

const questions = [{
  question: "Did chandrayaan-3 made a successful landing on lunar south pole ?",
  answer: "yes"
}, {
  question: "What is the name of indigenously built aircraft carrier for Indian Navy ?",
  answer: "vikrant"
}, {
  question: "In which country the biggest cricket stadium of the world  located ?",
  answer: "india"
}, {
  question: "Name of India's first homemade covid vaccine ?",
  answer: "covaxin"
}, {
  question: "Total number of lok sabha seats 545 or 546 ?",
  answer: "545"
} ]

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("*****Quiz ends here*****")
console.log("Your Final Score is:", score)

console.log("High Scorers🏅")

const highScorers = [
  {
    name: "Aman👨",
    score: 9

  },
  {
    name: "Jessi👩",
    score: 8
  }

]

for (let i = 0; i < highScorers.length; i++) {
  console.log(highScorers[i].name),
    console.log("Score:", highScorers[i].score),
    console.log("<---->")
}



