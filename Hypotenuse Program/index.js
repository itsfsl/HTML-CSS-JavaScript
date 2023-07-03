let a, b

document.getElementById("submitButton").onclick = function() {

    a = document.getElementById("aSideInput").value
    b = document.getElementById("bSideInput").value

    a = Number(a)
    b = Number(b)

    document.getElementById("cSide").innerHTML = "Side C: " + (Math.sqrt((a*a) + (b*b)))
}

