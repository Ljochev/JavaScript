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
        question: "What is the name of the country you are born?",
        options: [
          "North Macedonia",
          "FYROM",
          "Macedonia",
          "Skopje",
        ],
        correctAnswer: "Macedonia",
      },
  ] 

  let j = 0
const cycle = quizData.length
const container = document.getElementById("quiz-container")
const myQuestion = document.createElement("h1")
    const myInput = []
    const answerValue = []
  const quizFunction = (object) => {
    myQuestion.textContent = object.question
    container.appendChild(myQuestion)
  
  
  for(let i = 0; i < object.options.length; i++) {
    myInput[i] = document.createElement("input")
    myInput[i].type = "radio"
    myInput[i].name = "answer"
    myInput[i].value = object.options[i]
    
    answerValue[i] = document.createElement("label")
    answerValue[i].textContent = object.options[i]
    
    container.appendChild(myInput[i])
  container.appendChild(answerValue[i])
  document.createElement("br")
  container.appendChild(document.createElement("br"))

  }
  const myButton = document.createElement("Button")
  myButton.textContent = "Submit"
  myButton.type = "Button"
  container.appendChild(myButton)
  myButton.addEventListener("click", (event) => {
    // quizFunction(quizData[1])
let myFinalAnswer 
   for(let i = 0; i < myInput.length; i++) {
   if(myInput[i].checked === true) 
   {myFinalAnswer = `${myInput[i].value}`} 
}
for(let i = 0; i < myInput.length; i++){
myInput[i].remove()
answerValue[i].remove()
}
myButton.remove()
   if(myFinalAnswer === object.correctAnswer)
   {
    let congratulations = document.createElement("p")
    congratulations.textContent = "Congratulations, " + myFinalAnswer + " is the right answer!"
    // console.log("Congratulations, " + myFinalAnswer + " is the right answer!")
    container.appendChild(congratulations)
}
   else {
    let congratulations = document.createElement("p")
    congratulations.textContent = "Wrong, " + myFinalAnswer + " is not the right answer!"
    container.appendChild(congratulations)
    // console.log("Wrong, " + myFinalAnswer + " is not the right answer!")
}

  j++
if(j < cycle) {
    quizFunction(quizData[j])
} else {
    myQuestion.remove()
    let endOfTheQuiz = document.createElement("p")
    endOfTheQuiz.textContent = "End of the quiz"
    container.appendChild(endOfTheQuiz)
    // console.log("End of the quiz")
}
})
  
} //end of quizFunction()

quizFunction(quizData[0])


