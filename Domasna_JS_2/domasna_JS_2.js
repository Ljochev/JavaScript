// 1. а) 

// let globalNum = 10

// function checkScope () {
//     console.log(globalNum)
// }
// checkScope ()

// б)

// let globalNum = 10
// function checkScope () {
//     let localNum = 10
// }

// console.log(globalNum === localNum)

// Answer : error

// let globalNum = 10
// function checkScope () {
//     let localNum = 10
// }

// console.log(globalNum === localNum)

// // в)

// if (true) {
//     let blockNum = 10
   
// }
// console.log(typeof blockNum)

// // Answer : undefined

// // 2. а)  

// let number = 10
// if (number % 2 === 0){
//     console.log("Brojot " + number + " e paren broj.")
// } else  {
//     console.log("Brojot " + number + " e neparen broj.")
// }

// // б) 

// let age = 18
// if (age >= 18 ) {
//     console.log("Liceto ima pravo na glasenje!")
// } else {
//     console.log("Liceto nema pravo na glasenje!")
// }

// // в) 

// let score = 78
// if (score >= 90 && score <= 100) {
//     console.log("Grade: A")
// } else if (score >= 80 && score <= 89) {
//     console.log("Grade: B")
// } else if (score >= 70 && score <= 79) {
//     console.log("Grade: C")
// } else if (score >= 60 && score <= 69) {
//     console.log("Grade: D")
// } else if (score >= 0 && score <= 59) {
//     console.log("Grade: F")
// } else {
//     console.log("Invalid score! Please enter a score between 0 and 100")
// }


// // г) 

// let dayNumber = 4

// switch (dayNumber){
// case 1 :
//     console.log("The day is Sunday")
// break
// case 2 :
//     console.log("The day is Monday")
// break
// case 3 :
//     console.log("The day is Tuesday")
// break
// case 4 :
//     console.log("The day is Wednesday")
// break
// case 5 :
//     console.log("The day is Thursday")
// break
// case 6 :
//     console.log("The day is Friday")
// break
// case 7 :
//     console.log("The day is Saturday")
// break
// default :
// console.log("Invalid day number. Please enter a number between 1 and 7")
// }

// // 3.

// function sumThreeNumbers (num1,num2,num3) {
//     return num1 + num2 + num3
// }
// console.log(sumThreeNumbers(1,2,3))



// function returnMyString (string) {
//     if ( typeof string === "string") {
// return string
//     } else {
//         return "The value entered is not a string!"

//         }    }

// console.log(returnMyString ("Kostadin"))

// function isEqual (num1,num2) {
//     if (num1 === num2) {
//         console.log("These numbers are equal")
//     } else {
//         console.log("These numbers are not equal")
//     }
// }

// isEqual (3,4)