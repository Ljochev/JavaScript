// 1. а. __________________________________________________________________

// let fruits = ["apple", "banana", "orange"]

// console.log(fruits[1])

// fruits.push("lemon")

// б. __________________________________________________________________

// let person = {
//     name: "Kostadin",
//     age: 33,
//     city: "Seminole",
// }
// console.log(person.city)

// person.age = 34
// console.log(fruits,person)

// 2. а. __________________________________________________________________

// for(let i=0; i <=10; i++){
// console.log(i)
// }

// б. __________________________________________________________________

// let end = 10
// let sum = 0
// for(let i = start; i <= end; i++){
// if(i % 2 === 0){
//     sum += i
// }
// }
// console.log(sum)

// в. __________________________________________________________________

// let person = {
//     name: "Kostadin",
//     age: 33,
//     city: "Seminole",
// }

// for(let x in person){
//     console.log( x + ": " + person[x])

// }

// г. __________________________________________________________________

// let colors = ["red", "green", "blue"]

// for(let x of colors){

// console.log(colors[0].length + " " + x)

// }

// 3. a. __________________________________________________________________


// let count = 5

// while(count >= 1){
//     console.log(count)
//     count--
// }

// б. __________________________________________________________________

// let num = 10

// do{
//     console.log(num)
// num--
// } while(num >= 1)

// 4. a.  __________________________________________________________________

// function multiply(num1,num2){
//     let result = 0
//     result = num1 * num2
//     return result
// }

// б.  __________________________________________________________________

// let divide = function(num1, num2) {
//     let result = 0
//     result = num1 + num2
//     return result
// }

// в. __________________________________________________________________

// let subtract = (num1,num2) => {
//     let result = 0
//     result = num1 - num2
//     return result
// }
// __________________________________________________________________

// console.log(multiply(4,5))
// console.log(divide(10,5))
// console.log(subtract(8,5))

// 5. a.  __________________________________________________________________

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function calculateArraySum(numbersArray){
//     let sum = 0
// for(let i=0; i < numbersArray.length; i++){
//     sum += numbersArray[i]
// }
// console.log(sum)
// }

// calculateArraySum(myArray)

// 6.__________________________________________________________________



// let students = []

// students[0] = {
//     name: "Kostadin",
//     surname: "Ljochev",
//     age: 33,
//     address: {
//         city: "Seminole",
//         street: {
//             name: "Seminole Blvd",
//             number: 9209,
//             zipCode: 33702,
//         },
//     },
// }
// students[1] = {
//     name: "Mitko",
//     surname: "Vasilev",
//     age: 28,
//     address: {
//         city: "Chicago",
//         street: {
//             name: "Belmont Ave",
//             number: 4304,
//             zipCode: 60634,
//         },
//     },
// }
// console.log(students[0].address.city)
// console.log(students[1]["address"]["city"])

// 7. a.__________________________________________________________________

// function myFunction(number){
//     if(number % 5 === 0 && number % 3 === 0){
//         console.log("FizzBuzz")
//     } else if(number % 5 === 0 && number % 3 !== 0){
//         console.log("Buzz")
//     } else  if(number % 3 === 0){
//     console.log("Fizz")
// } else {
//     console.log(number)
// }
// }
// for(let i = 0; i < 50; i++){
// myFunction(i + 1)
// }

// б.  __________________________________________________________________

// function myFunction(month){
//     switch(month){
//         case "January" : console.log(31)
//         break
//         case "February" : console.log(28)
//         break
//         case "March" : console.log(31)
//         break
//         case "April" : console.log(30)
//         break
//         case "May" : console.log(31)
//         break
//         case "June" : console.log(30)
//         break
//         case "July" : console.log(31)
//         break
//         case "August" : console.log(31)
//         break
//         case "September" : console.log(30)
//         break
//         case "October" : console.log(31)
//         break
//         case "November" : console.log(30)
//         break
//         case "December" : console.log(31)
//         break
//         default :console.log("invalid input") 

//     }
// }

// myFunction("March")

// 8. a.__________________________________________________________________

// let book = {
//     type: "Poetry",
//     author: "Lewis Carroll",
//     name: "Jabberwocky",
//     year: 1871,
//     language: "English",
//     cover: {
//         colour: "Red",
//         type: "Hard",
//     },

// }

// б. __________________________________________________________________

// let car = {
//     brand: "Nissan",
//     model: "Altima",
//     color: "Black",
//     year: 2015,
//     extras: ["letterSeats", "backupCamera", "ABS", "LCD Display"]

// }
// console.log(car)

// в. __________________________________________________________________

// let student = {
//     name: "Kostadin",
//     lastName: "Ljochev",
//     status: "Active",
//     address: {
//         state: "Florida",
//         city: "Seminole",
//         street: {
//             number: 9209,
//             name: "Seminole Blvd",
//             unit: 158,
//                 },
//         zipCode: 33702,
//     },
// }

// 9. а. __________________________________________________________________

// let j = 0
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         j++
//         if(j === 2){
//             console.log(i)
//             j = 0
//         }
//     }
    
// }

// б.__________________________________________________________________

// for(let i = 1; i <= 50; i++){
//     if(i % 2 === 0){
//             console.log(i)
//     }
    
// }