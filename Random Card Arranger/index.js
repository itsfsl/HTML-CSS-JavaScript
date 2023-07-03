let a = 2
let b = 2
let c = 5
let d = 32

console.log(sumUp(a, b, c, d))

function sumUp(...numbers) {

    let total = 0

    for(number of numbers) {

        total += number
    }

    return total
}

let prices = [23, 35, 43, 46, 76, 87]

let total = prices.reduce(checkOut)

function checkOut (total, element) {

    return total + element
}

console.log(total)

let ages = [2, 6, 23, 14, 54, 25, 75, 21, 8, 15]

let adults = ages.filter(checkAge)

adults.sort(sortAsc)
adults.forEach(print)

function checkAge(element) {

    return element >= 18
}

function sortAsc(x, y) {

    return x - y
}

function print(element) {

    console.log(element)
}

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]


shuffle(cards)

console.log(cards)

cards.forEach(cards => console.log(cards))

function shuffle(cards) {

    let currentIndex = cards.length
    console.log(`Logic Starts Here`)
    console.log(currentIndex)
    
    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * cards.length)
        currentIndex --
        let temp = cards[currentIndex]
        cards[currentIndex] = cards[randomIndex]
        cards[randomIndex] = temp
    }

    return cards
}