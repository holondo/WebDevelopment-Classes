document.body.style.fontFamily = "tahoma"
document.querySelector("#nickname").innerHTML = "Holondo"
document.querySelector("#favorites").innerHTML = "Science, culture and my cat Aurelio"
document.querySelector("#hometown").innerHTML = "São Carlos - SP"

image = document.createElement("img")
image.src = "https://i.redd.it/xolgetuslm241.jpg"

document.body.insertBefore(image, document.querySelector("ul"))