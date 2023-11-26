const createForm = () => {
    // // removing creation button
    // myCreateButton.remove()
const myForm = document.createElement("form")
myForm.id = "my_form"
document.body.appendChild(myForm)


const newDiv1 = document.createElement("div")
newDiv1.className = "form-rows"
const newDiv2 = document.createElement("div")
newDiv2.className = "form-rows"
const newDiv3 = document.createElement("div")
newDiv3.className = "form-rows"
const newDiv4 = document.createElement("div")
newDiv4.className = "form-rows"
const newDiv5 = document.createElement("div")
newDiv5.className = "form-rows"

myForm.appendChild(newDiv1)
myForm.appendChild(newDiv2)
myForm.appendChild(newDiv3)
myForm.appendChild(newDiv4)
myForm.appendChild(newDiv5)

const myFirstNameLabel = document.createElement("label")
myFirstNameLabel.className = "labels"
myFirstNameLabel.textContent = "First Name:"

const myFirstNameInput = document.createElement("input")
myFirstNameInput.className = "input"
myFirstNameInput.type = "text"
myFirstNameInput.placeholder = "Your Name"


const myLastNameLabel = document.createElement("label")
myLastNameLabel.className = "labels"
myLastNameLabel.textContent = "Last Name:"

const myLastNameInput = document.createElement("input")
myLastNameInput.className = "input"
myLastNameInput.type = "text"
myLastNameInput.placeholder = "Your Last Name"

const myEmailLabel = document.createElement("label")
myEmailLabel.className = "labels"
myEmailLabel.textContent = "email:"

const myEmailInput = document.createElement("input")
myEmailInput.className = "input"
myEmailInput.type = "email"
myEmailInput.placeholder = "something@somewhere.com"

const myPasswordLabel = document.createElement("label")
myPasswordLabel.className = "labels"
myPasswordLabel.textContent = "Password:"

const myPasswordInput = document.createElement("input")
myPasswordInput.className = "input"
myPasswordInput.type = "password"
myPasswordInput.placeholder = "Password"

const myConfirmPasswordLabel = document.createElement("label")
myConfirmPasswordLabel.className = "labels"
myConfirmPasswordLabel.textContent = "Confirm password:"

const myConfirmPasswordInput = document.createElement("input")
myConfirmPasswordInput.className = "input"
myConfirmPasswordInput.type = "password"
myConfirmPasswordInput.placeholder = "Confirm password"

newDiv1.appendChild(myFirstNameLabel)
newDiv1.appendChild(myFirstNameInput)
newDiv2.appendChild(myLastNameLabel)
newDiv2.appendChild(myLastNameInput)
newDiv3.appendChild(myEmailLabel)
newDiv3.appendChild(myEmailInput)
newDiv4.appendChild(myPasswordLabel)
newDiv4.appendChild(myPasswordInput)
newDiv5.appendChild(myConfirmPasswordLabel)
newDiv5.appendChild(myConfirmPasswordInput)

console.log(myFirstNameInput.value)

const myButton = document.createElement("button")
myButton.textContent = "Register"
myButton.id = "my-button"
myForm.appendChild(myButton)


const checkData = (event) => {
    if(myFirstNameInput.value === "" ||
    myLastNameInput.value === "" ||
    myEmailInput.value === "" ||
    myPasswordInput.value === "" ||
    myConfirmPasswordInput.value === "") {
    alert("no value entered")
    } else {
        if(myPasswordInput.value === myConfirmPasswordInput.value){
            alert("Registration Successful! " + myFirstNameInput.value + " " + myLastNameInput.value + " " + myEmailInput.value )
        } else {
            alert("Passwords do not match. Please try again.")
        }
    }
    // alert("The form is submitted")

    event.preventDefault()
}

myButton.addEventListener("click", checkData)
}
// // additional creation form with button
// const myCreateButton = document.createElement("button")
// myCreateButton.textContent = "Create register form"
// myCreateButton.className = "creation"
// document.body.appendChild(myCreateButton)
// myCreateButton.addEventListener("click", createForm)

createForm()