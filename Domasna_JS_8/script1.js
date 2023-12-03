async function fetchDataAndShow() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
        const myContainer = document.getElementById("my-container")
        data.forEach( (el) => {
            const newDiv = document.createElement("div")
            newDiv.id = "myDiv"
            myContainer.appendChild(newDiv)
            const nameParagraph = document.createElement("p")
            const numberParagraph = document.createElement("p")
            numberParagraph.id = "NumberID"
            const companyNameParagraph = document.createElement("p")
            nameParagraph.textContent = el.name
           newDiv.appendChild(nameParagraph)
           numberParagraph.textContent = el.phone
           newDiv.appendChild(numberParagraph)
           companyNameParagraph.textContent = el.company.name
           console.log(el.company.name)
           newDiv.appendChild(companyNameParagraph)
        }
        )
    } catch(error){
        console.log(error)
    }
}

fetchDataAndShow()