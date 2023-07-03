let canvas = document.querySelector("#gameFrame")
let cntx = canvas.getContext("2d")
let scoreLabel = document.querySelector("#scoreLabel")
let restartButton = document.querySelector("#restartButton")
const gameWidth = canvas.width
const gameHeight = canvas.height
const unitSize = 25

window.addEventListener("keydown", changeDirection)
restartButton.addEventListener("click", restartGame)

let appleX, appleY
let applesEaten = 0
let highScore = 0
let snakeBody = [

    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize, y: 0},
    {x: 0, y: 0}
]
let xVelocity = unitSize
let yVelocity = 0

let gameRunning = false

startGame()

function startGame() {

    gameRunning = true
    scoreLabel.textContent = `Current Score: ${applesEaten}`
    highScoreLabel.textContent = (`High Score: ${highScore}`)
    createApple()
    loopy()

    function loopy() {
        
        if (gameRunning) {

            intervalID  = setTimeout(() => {

                clearBoard()
                drawApple(appleX, appleY)
                drawSnake()
                moveSnake()
                checkCollision()
                loopy()
            }, 75)
        }
        else {

            if (highScore < applesEaten) {

                highScore = applesEaten
                highScoreLabel.textContent = (`High Score: ${highScore}`)
            }
            displayGameOver()
        }
    }
}

function clearBoard() {

    cntx.clearRect(0, 0, gameWidth, gameHeight)
}

function createApple() {

    appleX = Math.floor(Math.random() * (gameWidth / unitSize)) * unitSize
    appleY = Math.floor(Math.random() * (gameHeight / unitSize)) * unitSize
    drawApple(appleX, appleY)
}

function drawApple(appleX, appleY) {

    cntx.fillStyle = "red"
    cntx.fillRect(appleX, appleY, unitSize, unitSize)
}

function drawSnake() {

    cntx.fillStyle = "lightgreen"
    cntx.strokeStyle = "black"
    snakeBody.forEach(snakePart => {
        
        cntx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        cntx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    });
}

function moveSnake() {

    const snakeHead = {

        x: snakeBody[0].x + (xVelocity),
        y: snakeBody[0].y + (yVelocity)
    }
    snakeBody.unshift(snakeHead)

    if (snakeHead.x == appleX && snakeHead.y == appleY) {

        applesEaten++
        scoreLabel.textContent = `Current Score: ${applesEaten}`
        createApple()
    }
    else {

        snakeBody.pop()
    }
}

function changeDirection(event) {

    const upDirection = (yVelocity == -unitSize)
    const downDirection = (yVelocity == unitSize)
    const leftDirection = (xVelocity == -unitSize)
    const rightDirection = (xVelocity == unitSize)
    
    const goUp = 38
    const goDown = 40
    const goLeft = 37
    const goRight = 39

    if (event.keyCode == goUp && !downDirection) {

        xVelocity = 0
        yVelocity = -unitSize
    }

    if (event.keyCode == goDown && !upDirection) {

        xVelocity = 0
        yVelocity = unitSize
    }

    if (event.keyCode == goLeft && !rightDirection) {

        xVelocity = -unitSize
        yVelocity = 0
    }

    if (event.keyCode == goRight && !leftDirection) {

        xVelocity = unitSize
        yVelocity = 0
    }
}

function checkCollision() {

    switch (true) {

        case (snakeBody[0].x < 0):
            gameRunning = false
            break
        case (snakeBody[0].x >= gameWidth):
            gameRunning = false
            break
        case (snakeBody[0].y < 0):
            gameRunning = false
            break
        case (snakeBody[0].y >= gameHeight):
            gameRunning = false
            break
    }

    for (let i = 1; i < snakeBody.length; i++) {

        if (snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y) {

            gameRunning = false
        }
    }
}

function displayGameOver() {

    cntx.font = "50px MV Boli"
    cntx.fillStyle = "white"
    cntx.textAlign = "center"
    cntx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2)
}

function restartGame() {

    if (!gameRunning) {

        
        applesEaten = 0
        xVelocity = unitSize;
        yVelocity = 0;
        snakeBody = [

            {x: unitSize * 3, y: 0},
            {x: unitSize * 2, y: 0},
            {x: unitSize, y: 0},
            {x: 0, y: 0}
        ]
        startGame()
    }
}