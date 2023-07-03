let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

shuffle(cards)

function shuffle(cards) {

    let currentIndex = cards.length
    
    while(currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * cards.length)
        currentIndex--

        let temp = cards[currentIndex]
        cards[currentIndex] = cards[randomIndex]
        cards[randomIndex] = temp
    }
}

console.log(cards)