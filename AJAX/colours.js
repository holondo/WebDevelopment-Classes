let colourName = document.querySelector("#colour-name")
let show = document.querySelector("#colour-show")
let colourCode = document.querySelector("#colour-code")
let btn = document.querySelector("#btn-change")
let count = 0;

btn.addEventListener("click", async (event) => {
    event.preventDefault()
    if(colourCode.value != "" )
    {
        count = colourCode.value % 6
    }

    colourPromise = await fetch("https://reqres.in/api/unknown/" + (++count)%7,
        {
            method:"GET"
        }
    )
    //console.log(colourPromise.text()) //Funcionaria para retornar a stream colourPromise como string
    colourJSON = await colourPromise.json()
    colourJSON = colourJSON.data
    
    show.style.backgroundColor = colourJSON.color
    colourName.innerHTML = "Colour: " + colourJSON.color + " - " + colourJSON.name
    colourCode.value = colourJSON.id
})