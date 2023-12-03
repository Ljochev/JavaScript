async function fetchDataAndShow() {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log(data)
        let i = 0
        let j = 0

        const myContainer = document.createElement("div")
        myContainer.id = "my-container"
        document.body.appendChild(myContainer)



        data.results.forEach( (el) => {
            if(i % 5 === 0) {
                // const newDiv[j] = document.createElement("div")
                // newDiv.id = "my-div"
                // myContainer.appendChild(newDiv[j])
                console.log(j)
                j++
        // console.log(i)
            }
            const newDiv = document.createElement("div")
            newDiv.id = "my-div"
            myContainer.appendChild(newDiv)
           

            const myImage = document.createElement("img")
            myImage.src = el.image
            newDiv.appendChild(myImage)

            const divInfo = document.createElement("div")
            divInfo.id = "div-info"
            newDiv.appendChild(divInfo)

            const nameParagraph = document.createElement("p")
            nameParagraph.textContent = el.name
            divInfo.appendChild(nameParagraph)

            const genderParagraph = document.createElement("p")
            genderParagraph.textContent =  el.gender
            divInfo.appendChild(genderParagraph)

            const statusParagraph = document.createElement("p")
            statusParagraph.textContent =  el.status
            if(el.status === "Alive") {
                statusParagraph.id = "pAlive"
            } else if(el.status === "Dead") {
                statusParagraph.id = "pDead"
            } else if(el.status === "unknown") {
                statusParagraph.id = "pUnknown"
            }
            divInfo.appendChild(statusParagraph)

            const numbersOfEpisodesParagraph = document.createElement("p")
            numbersOfEpisodesParagraph.textContent = `Episodes: ${el.episode.length}`
            divInfo.appendChild(numbersOfEpisodesParagraph)
i++;
        }
        )
    } catch(error){
        console.log(error)
    }
}

fetchDataAndShow()