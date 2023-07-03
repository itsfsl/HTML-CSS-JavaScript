let x = 0

document.getElementById("decreaseButton").onclick = function() {

    x--
    document.getElementById("counter").innerHTML = x
}

document.getElementById("resetButton").onclick = function() {

    x = 0
    document.getElementById("counter").innerHTML = x
}

document.getElementById("increaseButton").onclick = function() {

    x++
    document.getElementById("counter").innerHTML = x
}