const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "Who is the capital city of North Macedonia",
    options: [
      "Bitola",
      "Kumanovo",
      "Stip",
      "Skopje",
    ],
    correctAnswer: "Skopje",
  },
  {
    question: "What colour is the sky",
    options: [
      "Blue",
      "Green",
      "Yellow",
      "Red",
    ],
    correctAnswer: "Blue",
  },

] 
const cycleLength = quizData.length
const container = document.getElementById("quiz-container")
    const myQuestion = document.createElement("h1")
  myQuestion.id = "question"
  container.appendChild(myQuestion)
  const myButton = document.createElement("Button")
myButton.textContent = "Submit"
myButton.id = "submitt"


  let j = 0
  const myInput = []
  const answerValue = []

const quizFunction = (object) => {
 
  if(j !== cycleLength) {
  myQuestion.textContent = object.question
  
if(j === 0) {
  const myContainer = []
for(let i = 0; i < object.options.length; i++) {
   myContainer[i] = document.createElement("div")
  myContainer[i].id = "myContainer"
  container.appendChild(myContainer[i])
  myInput[i] = document.createElement("input")
  myInput[i].type = "radio"
  myInput[i].name = "answer"
  myInput[i].id = "input"
  
  answerValue[i] = document.createElement("label")
  answerValue[i].id = "answer"
  
  myContainer[i].appendChild(myInput[i])
  myContainer[i].appendChild(answerValue[i])
document.createElement("br")
container.appendChild(document.createElement("br"))
  
}
container.appendChild(myButton)
}

for(let i = 0; i < object.options.length; i++) {
  myInput[i].value = object.options[i]
  answerValue[i].textContent = object.options[i]
}
const checkAnswer = () => {
let myFinalAnswer 
 for(let i = 0; i < myInput.length; i++) {
 if(myInput[i].checked === true) 
 {myFinalAnswer = `${myInput[i].value}`} 
}

if(myFinalAnswer === object.correctAnswer)
 {
  alert(object.question + "True, " + myFinalAnswer + " is the right answer!")

}
 else {
  alert(object.question + "True, " + myFinalAnswer + " is the right answer!")
 }
 j++
 quizFunction(quizData[j])

}


myButton.onclick = checkAnswer
}
}//end of quizFunction()
quizFunction(quizData[0])
