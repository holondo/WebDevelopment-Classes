//Question 1
let paragraph = document.getElementsByTagName("p")[0]

let linkH = document.createElement("a")
linkH.href = "index.html"

let btnHome = document.createElement("button")
btnHome.innerHTML = "Home"

linkH.appendChild(btnHome)
document.body.insertBefore(linkH, null)

//Question2
paragraph.innerText = paragraph.innerText.replaceAll(".", ".\n")

//Question 3
let wordCount = paragraph.innerHTML.split(" ").length
wordCount += 1

let wordsStr = document.createElement("h2")
wordsStr.innerText = "Number of Words: " + wordCount.toString()

document.body.insertBefore(wordsStr,document.querySelector("h1"))

//Question 4
let textToProcess = ""
let words = paragraph.innerHTML.split(" ")

for (let word of words) {
    let len = word.replace(/[^a-zA-Z]/g, "").length

    if(len > 3 && len <=5){ textToProcess += "<mark class=\"purple\">" + word + "</mark>"}
    else if(len == 6){ textToProcess += "<mark class=\"blue\">" + word + "</mark>"}
    else if(len >= 8){ textToProcess += "<mark class=\"pink\">" + word + "</mark>"}
    else{ textToProcess += word}
    textToProcess += " "
}
paragraph.innerHTML = textToProcess

document.getElementsByClassName("blue").forEach(element => {
    element.setAttribute()
});
