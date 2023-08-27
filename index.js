let currentWord = document.querySelector("#current-word")

let wordInput = document.querySelector("#word-input")

let score = document.querySelector("#score")

let timeDisplay = document.querySelector("#time")
let msg = document.querySelector("#message")


let dropDown = document.querySelector("#dropDown")


let sc = 0
let time = 5
let arr = ["java", "mern", "Android", "C", "Adam", "Avenger", "Hulk", "iron man", "wonda", "doctor Strenge","flutter"]

//event handler

window.addEventListener("DOMContentLoaded", function () {
    time=setLevel()

    showWord(arr)
    //level.addEventListener("click",List)
    wordInput.addEventListener("input", startMatch)
    this.setInterval(timer, 1000)
   
})

function showWord(arr) {
//msg.innerHTML=""
    let ran = Math.floor(Math.random() * arr.length)
    currentWord.innerHTML = arr[ran]

}

function startMatch(e) {
    
    if (e.target.value === currentWord.innerHTML) {
        time=setLevel();
        showWord(arr)
        wordInput.value = ""
        sc++
        score.innerHTML = sc
      msg.innerHTML="Correct!!!"
    }
    else{
        msg.innerHTML=""

    }
    

}

function timer() {
    if (time >= 0) {
        timeDisplay.innerHTML = time
        time--
    }
    else{
       time=setLevel();
        sc=0
        score.innerHTML=sc
        msg.innerHTML="Game Over!!!"
  
    }

}

function setLevel(){
    return Number(dropDown.value);
}