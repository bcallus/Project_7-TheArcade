const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score-display");
const highScoreDisplay = document.getElementById("high-score-display");
const gameBoardCell = document.getElementsByClassName("game-board-cell");
const startButton = document.getElementById("start-button") 
const playAgain = document.getElementById("play-again");
const gameOutcomeMessage = document.getElementById("game-outcome-message");
const selectBoardSize = document.getElementById("select-board-size");

let width = 20;
let snake;
let interval;
let score = 0;
let direction;
scoreDisplay.innerHTML = "Score: " + score;

document.addEventListener("DOMContentLoaded", function () {
    direction = 0;
    makeGameBoard();
    startingSnake();
    generateRandomApple(gameBoardCell);
    });

function makeGameBoard () {
    for (let i = 0; i < width; i++) {
        const gameBoardRow = document.createElement("tr");
        gameBoard.appendChild(gameBoardRow);
        for (let j = 0; j < width; j++) {
        const gameBoardCell = document.createElement("td")
        gameBoardRow.appendChild(gameBoardCell);
        gameBoardCell.className = "game-board-cell"
        }
        gameBoardRow.lastChild.classList += " far-right-column";
        gameBoardRow.firstChild.classList += " far-left-column";
    }
    gameBoard.firstChild.classList = "top-row";
    if (gameBoard.firstChild.classList = "top-row") {
        for (let t = 0; t < width; t++) {
            gameBoardCell[t].classList.add("top-row")
        }
    }
    gameBoard.lastChild.classList = "bottom-row";
    if (gameBoard.lastChild.classList = "bottom-row") {
        for (let b = (width * (width-1)); b < (width * width); b++) {
            gameBoardCell[b].classList.add("bottom-row")
        }
    }
}


document.addEventListener("keydown", function (event) {
    const keyName = event.key 
    let head = gameBoardCell[snake[0]];
    if (head.classList.contains("top-row") && keyName === "ArrowUp") {
        direction = 2;
    } else if (head.classList.contains("bottom-row") && keyName === "ArrowDown") {
        direction = 2;
    } else if (keyName === "ArrowUp") {
        direction = -width;
        event.preventDefault();
    } else if (keyName === "ArrowDown") {
        direction = + width;
        event.preventDefault();
    } else if (keyName === "ArrowRight") {
        direction = 1;
        event.preventDefault();
    } else if (keyName === "ArrowLeft") {
        direction = -1;
        event.preventDefault();
    } 
    if (gameOutcomeMessage.innerHTML && (keyName === "ArrowUp"
        || keyName === "ArrowDown"
        || keyName === "ArrowRight"
        || keyName === "ArrowLeft")){
        direction = 0;
    }
})

function startingSnake () {
   snake = [1, 0];
    for (const snakeCell of snake) {
        gameBoardCell[snakeCell].classList.add("snake");
    } 
}

function generateRandomApple (gameBoardCell) {
    let apple = gameBoardCell[Math.floor(Math.random() * gameBoardCell.length)];
    if (apple.classList.contains("snake")) {
        apple = gameBoardCell[Math.floor(Math.random() * gameBoardCell.length)]
    }
    apple.classList.add("apple")
}

startButton.addEventListener("click", function() {
    direction = 1;
    startGame();
    this.disabled = true;
});

let intervalRate = 1000;
function startGame () {
    intervalRate = 1000;
    clearInterval(interval);
    interval = setInterval(tick, intervalRate, gameBoardCell);
    direction = 1;
}

function tick (gameBoardCell) {
    if (gameBoardCell[snake[0]] === undefined) {
        gameOutcomeMessage.innerHTML = "You hit a wall! <br>GAME OVER"
    } else if (direction !== 0) {
        let tail = snake.pop();
        gameBoardCell[tail].classList.remove("snake");
        snake.unshift(snake[0] + direction)
        gameBoardCell[snake[1]].classList.add("snake");
        gameBoardCell[snake[0]].classList.add("head");
        gameBoardCell[snake[1]].classList.remove("head");
        eatApple(gameBoardCell, tail);
        checkHits();
    }
}

function eatApple (gameBoardCell, tail) {
    let head = gameBoardCell[snake[0]];
    if (head.classList.contains("apple")) {
        head.classList.remove("apple");
        snake.push(tail);
        generateRandomApple(gameBoardCell);
        score++;
        scoreDisplay.innerHTML = "Score: " + score;
        intervalRate *= .9;
        clearInterval(interval)
        interval = setInterval(tick, intervalRate, gameBoardCell);
    }
}

let highScore = 0;
function checkHits () {
    highScoreDisplay.innerHTML = "High Score: " + highScore;
    let head = gameBoardCell[snake[0]];
    let neck = gameBoardCell[snake[1]];
    if ((neck.classList.contains("far-right-column") && direction === 1) 
        || (neck.classList.contains("far-left-column") && direction === -1)
        || (neck.classList.contains("top-row") && direction === 2)
        || (neck.classList.contains("bottom-row") && direction === 2)){
            gameBoardCell[snake[0]].classList.remove("head");
            direction = 0;
            gameOutcomeMessage.innerHTML = "You hit a wall! <br>GAME OVER"
        } else if (head.classList.contains("snake")) {
        gameOutcomeMessage.innerHTML = "You bit yourself! <br>GAME OVER"
        direction = 0;
        }
    if (gameOutcomeMessage.innerHTML && score > highScore) {
        console.log(score);
        console.log(highScore);
        if (score > highScore) {
            highScore = score;
            console.log(highScore);
            highScoreDisplay.innerHTML = "High Score: " + highScore; 
        }
    }
}

playAgain.addEventListener("click", function(){
    resetGame();
  })

function resetGame () {
    gameBoard.innerHTML = "";
    gameOutcomeMessage.innerHTML = "";
    score = 0;
    direction = 0;
    scoreDisplay.innerHTML = "Score: " + score;
    makeGameBoard();
    startingSnake();
    generateRandomApple(gameBoardCell);
    startButton.removeAttribute('disabled');
}