setInterval(update, 1000)

function update() {

    let date = new Date
    document.getElementById("myTime").innerHTML = formatTime(date)
    document.getElementById("myDate").innerHTML = formatDate(date)

    function formatDate(date) {

        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
    
        return `${day}/${month}/${year}`
    }
    
    function formatTime(date) {
    
        let hours = date.getHours()
        let mins = date.getMinutes()
        let secs = date.getSeconds()
        let amOrPm = hours >= 12 ? "PM" : "AM"

        hours = (hours % 12) || 12
        hours = formatZeroes(hours)
        mins = formatZeroes(mins)
        secs = formatZeroes(secs)
    
        return `${hours}:${mins}:${secs} ${amOrPm}`
    }

    function formatZeroes(time) {

        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }
}