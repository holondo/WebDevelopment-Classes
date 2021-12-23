function isJoeHappy(happy, callback){
    console.log("Called")
    setTimeout(() => {
      const happyness = Math.random()
      console.log(happyness)
      if (happyness > happy) {
        callback(happyness);
      } else {
        callback(new Error("Joe is sad!"));
      }
    }, 2000);
}

function isJoeHappy2(happy){
    new Promise((resolve) => {
        setTimeout(() => {
            const happyness = Math.random()
            console.log(happyness)
            resolve(happyness)
            }, 2000
        )
    })
    .then((value) => {
        if(value <= happy){
            display(new Error("Joe is sad!"))
        }
        else{
            display(value)
        }
    })
}

async function isJoeHappy3(happy){
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            const happyness = Math.random()
            console.log(happyness)
            resolve(happyness)
            }, 2000
        )
    })
    if(result <= happy){
        display(new Error("Joe is Sad"))
    }
    else{
        display(result)
    }
}

function display(result) {
    if(typeof(result) == "number"){
        txtResponse.innerHTML = "Yes! By " + Math.round(result * 100) + "%"
    }
    else{
        txtResponse.innerHTML = "No!!! " + result.message
    }
    return
}

let btnAsk = document.querySelector("#btn-ask")
let btnAsk2 = document.querySelector("#btn-ask2")
let btnAsk3= document.querySelector("#btn-ask3")
let threshold = document.querySelector("#threshold")
let txtResponse = document.querySelector("#txt-response")

btnAsk.addEventListener("click",  () => {isJoeHappy(threshold.value, display)} )
btnAsk2.addEventListener("click",  () => {isJoeHappy2(threshold.value)} )
btnAsk3.addEventListener("click",  () => {isJoeHappy3(threshold.value)} )