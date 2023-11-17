// ## Домашна 5

// ### Задача 1. --------------------------------------------

const printFunc = (seconds) => {
    if(`${typeof(seconds)}` === "number") {
        if(seconds > 0 && seconds < 10) {
            setTimeout(() => {
                console.log("Coding is not that hard!")
            }, seconds * 1000)
        } else { console.log("Please enter one digit number")}
    } else { console.log("Please enter number")}

}

printFunc(4)

// ### Задача 2. --------------------------------------------
// Напишете 5 функции кои враќаат Promise



// а. да се повикаат истите со .then() и .catch()
// a)_________________________________________________________
// const squareNumber = (num) => new Promise((resolve, reject) => {
//     if(true){
//         resolve(num * num)
//     } else {
//         reject("Error calculating")
//     }
    
//     })
    
//     squareNumber(2)
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

  function mySquareNumber(num) {
    
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
          resolve(num * num)
    } else {
          reject("Wrong calculation")
    }
        }, 1000);
   
    })
  }
  
  
  async function squareNumber(number) {
    
  try {
    const data = await mySquareNumber(number)
    console.log(data)
  } catch (data) {
    console.log(data)
  }
  }
  
  squareNumber(3)
// -------------------------------------------------------------------
// a)_________________________________________________________
    // const multiplyNumbers = (num1, num2) => new Promise((resolve, reject) => {
    //     if(true){
    //         resolve(num1 * num2)
    //     } else {
    //         reject("Error calculating")
    //     }
    //     })
        
    //     multiplyNumbers(2,3)
    //     .then((result) => {
    //         console.log(result)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
// b)____________________________________________________________
function myMultiplyNumbers(num1, num2) {
    
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
          resolve(num1 * num2)
    } else {
          reject("Wrong calculation")
    }
        }, 2000);
   
    })
  }
  
  
  async function multiplyNumbers(number1, number2) {
    
  try {
    const data = await myMultiplyNumbers(number1, number2)
    console.log(data)
  } catch (data) {
    console.log(data)
  }
  }
  
  multiplyNumbers(3,5)
// -------------------------------------------------------------------
// a)_________________________________________________________
        // const divideNumbers = (num1, num2) => new Promise((resolve, reject) => {
        //     if(true){
        //         resolve(num1 / num2)
        //     } else {
        //         reject("Error calculating")
        //     }
        //     })
            
        //     divideNumbers(6,3)
        //     .then((result) => {
        //         console.log(result)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
// b)____________________________________________________________
function myDivideNumbers(num1, num2) {
    
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
          resolve(num1 / num2)
    } else {
          reject("Wrong calculation")
    }
        }, 3000);
   
    })
  }
  
  
  async function divideNumbers(number1, number2) {
    
  try {
    const data = await myDivideNumbers(number1, number2)
    console.log(data)
  } catch (data) {
    console.log(data)
  }
  }
  
  divideNumbers(46,4)
// -------------------------------------------------------------------
// a)_________________________________________________________
            // const subtractNumbers = (num1, num2) => new Promise((resolve, reject) => {
            //     if(true){
            //         resolve(num1 - num2)
            //     } else {
            //         reject("Error calculating")
            //     }
            //     })
            // subtractNumbers(8,3)
            //     .then((result) => {
            //         console.log(result)
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
// b)____________________________________________________________
function mySubtractNumbers(num1, num2) {
    
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true){
          resolve(num1 - num2)
    } else {
          reject("Wrong calculation")
    }
        }, 4000);
   
    })
  }
  
  
  async function subtractNumbers(number1, number2) {
    
  try {
    const data = await mySubtractNumbers(number1, number2)
    console.log(data)
  } catch (data) {
    console.log(data)
  }
  }
  
  subtractNumbers(16,4)
// -------------------------------------------------------------------    
// a)_________________________________________________________
                // const addNumbers = (num1, num2) => new Promise((resolve, reject) => {
                //     if(true){
                //         resolve(num1 + num2)
                //     } else {
                //         reject("Error calculating")
                //     }
                //     })

                //     addNumbers(8,7)
                //     .then((result) => {
                //         console.log(result)
                //     })
                //     .catch((error) => {
                //         console.log(error)
                //     })
// b)____________________________________________________________
                    function myAddNumbers(num1, num2) {
    
                        return new Promise((resolve, reject) => {
                      setTimeout(() => {
                        if(true){
                              resolve(num1 + num2)
                        } else {
                              reject("Wrong calculation")
                        }
                            }, 5000);
                       
                        })
                      }
                      
                      
                      async function  addNumbers(number1, number2) {
                        
                      try {
                        const data = await myAddNumbers(number1, number2)
                        console.log(data)
                      } catch (data) {
                        console.log(data)
                      }
                      }
                      
                      addNumbers(16,4)


// ### Задача 3. --------------------------------------------



// const checkNumber = (number) =>  new Promise((resolve, reject) => {
   
//     if(number % 2 === 0) {
//         resolve("The number " + number + " is even")
    
//     } else {
//         reject("The number " + number + " is odd")
   
//     }

// })
// for(let i=1;i <= 10;i++){
// checkNumber(i)
// .then((message) => handleSuccess(message))
// .catch((error) => handleError(error)) 
// }


//   const handleSuccess = (message) => console.log(message)

//   const handleError = (error) => console.log(error)


//   ### Задача 4.---------------------------------------

// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           name: "John Doe",
//           age: 30,
//           email: "john@example.com",
//         })
//       }, 2000)
//     })
//   }

//   async function displayUserDetails() {

//     try {
//         const myData = await  fetchData()
//         console.log(myData)
//     } catch {
//         console.log("Error")
//     }

//   }

//   displayUserDetails()

//   ### Задача 5.----------------------------------------




//  function calculateSquareRoot(number) {
//     try{ if(number < 0) {
//    error = new Error("Cannot calculate square root of a negative number")
//    return error
//     }
//     return Math.sqrt(number)
//     } catch (error) {
//     error = new Error("Error occurred during square root calculation")
//     return error
//     } finally {
//     console.log("Square root calculation completed.")
//     }
//     }

//     console.log(calculateSquareRoot(23))






//  Zadaca 3 try/await
  // function NumberData(num) {
    
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
       
        
//         if (num %2 === 0) {
//           resolve("The number is even")
//         } else {
//           reject("The number is odd")
//         }
//       }, 3000)
//     })
//   }
  
  
//   async function checkNumber(number) {
    
//   try {
//     const user = await NumberData(number)
//     console.log(user)
//   } catch (oddNumber) {
//     console.log(oddNumber)
//   }
//   }
  
//   checkNumber(3)