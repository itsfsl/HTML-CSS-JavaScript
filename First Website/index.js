console.log("YELLOW?")
console.log("FUNNY :)")

//window.alert("You are fucked.")

let x = 2, y = 3

console.log("X = ", y, "&", "Y = ", y)
console.log("The result is: ", x+y)
console.log("Tadaaaa!")

document.getElementById("p1").innerHTML = "X = " + x + " & " + "Y = " + y
document.getElementById("p2").innerHTML = "The result is: " + (x+y)

let today

document.getElementById("myButton").onclick = function() {

    today = document.getElementById("today").value
    console.log(today)
}