let canvas = document.querySelector("#mainGame")
let cntx = canvas.getContext("2d")
let resetButton = document.querySelector("#resetButton")
resetButton.addEventListener("click", resetGame)
let scoreLabel = document.querySelector("#scoreLabel")
const gameHeight = canvas.height
const gameWidth = canvas.width
let player1Score = 0
let player2Score = 0
const paddleWidth = 20
const paddleHeight = 100
const paddleSpeed = 10
const player1 = {x: 10, y: gameHeight / 2}
const player2 = {x: (gameWidth - paddleWidth) - 10, y: gameHeight / 2}
let ballRadius = 10
let ballX = gameWidth / 2
let ballY = gameHeight / 2
let ballXDirection = 0
let ballYDirection = 0
let ballSpeed

const keysPressed = {};

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

startGame()

function startGame() {

    let previousTime = Date.now();

    createBall()
    loopFrame()
    
    function loopFrame() {

        const currentTime = Date.now();
        const deltaTime = currentTime - previousTime;

        clearBoard();
        drawBall(ballX, ballY);
        moveBall(deltaTime);
        drawPaddles();
        movePaddles();
        checkCollision();

        previousTime = currentTime;
        intervalID = requestAnimationFrame(loopFrame);
    }
}

function clearBoard() {

    cntx.clearRect(0, 0, gameWidth, gameHeight);
}

function createBall() {

    ballSpeed = 100

    if(Math.round(Math.random()) == 1) {

        ballXDirection = 1
    }
    else {

        ballXDirection = -1
    }
    if(Math.round(Math.random()) == 1) {

        ballYDirection = 1
    }
    else {

        ballYDirection = -1
    }

    ballX = gameWidth / 2
    ballY = gameHeight / 2
    drawBall(ballX, ballY)
}

function drawBall(ballX, ballY) {

    cntx.fillStyle = "green"
    cntx.beginPath()
    cntx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI)
    cntx.fill()
}

function moveBall(deltaTime) {

    const speed = ballSpeed * deltaTime / 1000; // Convert speed to pixels per second

    ballX += ballXDirection * speed;
    ballY += ballYDirection * speed;
}

function drawPaddles() {

    cntx.fillStyle = "#ffb300"
    cntx.fillRect(player1.x, player1.y - (paddleHeight / 2), paddleWidth, paddleHeight)
    cntx.fillStyle = "#ff0051"
    cntx.fillRect(player2.x, player2.y - (paddleHeight / 2), paddleWidth, paddleHeight)
}

function handleKeyDown(event) {

    keysPressed[event.keyCode] = true;
}

function handleKeyUp(event) {

    delete keysPressed[event.keyCode];
}

function movePaddles() {

    if (keysPressed[87]) { // W key
        player1.y -= paddleSpeed;
    }
    if (keysPressed[83]) { // S key
        player1.y += paddleSpeed;
    }
    if (keysPressed[38]) { // Up arrow key
        player2.y -= paddleSpeed;
    }
    if (keysPressed[40]) { // Down arrow key
        player2.y += paddleSpeed;
    }
}

function checkCollision() {

    if(player1.y > gameHeight - (paddleHeight / 2)) {

        player1.y = gameHeight - (paddleHeight / 2)
    }

    if(player1.y < paddleHeight / 2) {

        player1.y = paddleHeight / 2
    }

    if(player2.y > gameHeight - (paddleHeight / 2)) {

        player2.y = gameHeight - (paddleHeight / 2)
    }

    if(player2.y < paddleHeight / 2) {

        player2.y = paddleHeight / 2
    }
    //ballCheckCollision
    if(ballY <= 0 + ballRadius || ballY >= gameHeight - ballRadius) {

        ballYDirection *= -1
        ballSpeed += 10
    }

    if(ballX <= 0) {

        player2Score++
        updateScore()
        createBall()
        return
    }

    if(ballX >= gameWidth) {

        player1Score++
        updateScore()
        createBall()
        return
    }

    if (ballX <= (player1.x + paddleWidth + ballRadius)) {

        if (ballY > player1.y - paddleHeight / 2 && ballY < player1.y + paddleHeight / 2) {

            ballXDirection *= -1;
        }
      }
      
      if (ballX >= player2.x - ballRadius) {

        if (ballY > player2.y - paddleHeight / 2 && ballY < player2.y + paddleHeight / 2) {

            ballXDirection *= -1;
        }
      }
}

function updateScore() {

    scoreLabel.textContent = `${player1Score} | ${player2Score}`
}

function resetGame() {

    player1Score = 0
    player2Score = 0
    updateScore()
    createBall()
}