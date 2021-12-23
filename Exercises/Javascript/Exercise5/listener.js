function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function deliberate(e) {
    let noun = document.getElementById("noun").value 
    let adjective = document.getElementById("adjective").value
    let person = document.getElementById("person").value

    if (noun == "" || adjective == "" || person == "") {
        window.alert("Insert all 3 words, i only have 2 neurons. I can't create things from nothing")
        e.preventDefault()
    }

    divStory = document.getElementById("story")

    let adverbs = ["admittedly", "apparently", "certainly", "confidentially", "consequently", "curiously", "fortunately", "frankly", "happily", "honestly", "hopefully", "incidentally", "ironically", "luckily", "mercifully", "naturally", "obviously", "oddly", "personally", "presumably", "regrettably"]
    let verbs = ["loves", "likes", "hates", "ignores", "deals with", "avoids", "eats", "does", "kisses", "cries over"]

    let rand = getRndInteger(0, adverbs.length)

    divStory.innerHTML = person + " " + adverbs[rand] + " "
    rand = getRndInteger(0, verbs.length)
    divStory.innerHTML += verbs[rand] + " " + adjective + " " + noun
    console.log(noun, adjective, person)
}
let btnTalk = document.getElementById("lib-button")
btnTalk.addEventListener("click", deliberate)