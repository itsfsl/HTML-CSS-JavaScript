document.getElementById("submitButton").onclick = function() {

    let input

    input = document.getElementById("inputBox").value

    // number.toLocaleString(locale, {options});

    // 'locale' = specify that language (undefined = default set in browser)
    // 'options' = object with formatting options

    //myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
    //myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

    //myNum = myNum.toLocaleString(undefined, {style: "percent"});
    //myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

    //myNum = myNum.toLocaleString("en-US"); // US English
    //myNum = myNum.toLocaleString("hi-IN"); // Hindi
    //myNum = myNum.toLocaleString("de-DE"); // standard German

    if (document.getElementById("celsius").checked) {

        let newTemp = convertToF(input)
        newTemp = newTemp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"})
        document.getElementById("convertedTemp").innerHTML = `Converted Temperature: ${newTemp}`
    }

    if (document.getElementById("fahrenheit").checked) {

        let newTemp = convertToC(input)
        newTemp = newTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"})
        document.getElementById("convertedTemp").innerHTML = `Converted Temperature: ${newTemp}`
    }

    function convertToC(temp) {

        return (temp * 9 / 5) + 32
         
    }

    function convertToF(temp) {
        
        return (temp - 32) * (5 / 9)
    }
}