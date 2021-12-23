function main(){
    document.getElementById("change_heading").innerHTML = "Super Cool 5 Colour Picker"
    let colours = ["brown", "green", "blue", "yellow"]

    for (const colour of colours) {
        let colourSquare = document.getElementsByClassName(colour)[0]
        console.log(colourSquare) 
        colourSquare.addEventListener("mouseenter", 
            function(){
                document.getElementsByClassName("selected")[0].innerHTML = colour
            }    
        )
    }
}
window.addEventListener("DOMContentLoaded", main)