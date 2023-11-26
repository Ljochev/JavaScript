const myMessage = document.createElement("h1")
myMessage.textContent = "No square is selected"
document.body.appendChild(myMessage)

const redElement = document.getElementById("red-box")
redElement.addEventListener("click", () => {
    myMessage.textContent = "You clicked red square"
})

const greenElement = document.getElementById("green-box")
greenElement.addEventListener("click", (event) => {
    event.stopPropagation()
    myMessage.textContent = "You clicked green square"
})

const blueElement = document.getElementById("blue-box")
blueElement.addEventListener("click", (event) => {
    event.stopPropagation()
    myMessage.textContent = "You clicked blue square"
})
