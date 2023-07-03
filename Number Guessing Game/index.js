const random = Math.floor(Math.random() * 10 + 1)
let guesses = 0

document.getElementById("submitButton").onclick = function () {

    let guess = document.getElementById("inputBox").value
    guesses++

    if (guess == random) {

        alert(`Well done! ${guess} is the correct number! & it took you ${guesses} tries`)
    }
    else if (guess > random) {

        alert(`Too High`)
    }
    else {
        
        alert(`Too Low`)
    }
}