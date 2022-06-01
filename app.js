//potential options:
//if snake gets to be a certain length, open up other things on the board.

const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score-display");
const gameBoardCell = document.getElementsByClassName("game-board-cell");
const startButton = document.getElementById("start-button") 
const playAgain = document.getElementById("play-again");

let width = 20; //maybe change this if we allow the user to select a board size
let snake;
let interval;
// let apple;
let score = 0;
let direction;

document.addEventListener("DOMContentLoaded", function () {
    direction = 0;
    makeGameBoard();
    startingSnake();
    generateRandomApple(gameBoardCell);
    });

function makeGameBoard () {
    for (let i = 0; i < 20; i++) {
        const gameBoardRow = document.createElement("tr");
        gameBoard.appendChild(gameBoardRow);
        for (let j = 0; j < 20; j++) {
        const gameBoardCell = document.createElement("td")
        gameBoardRow.appendChild(gameBoardCell);
        gameBoardCell.className = "game-board-cell"
        }
        gameBoardRow.lastChild.classList += " far-right-column"
        gameBoardRow.firstChild.classList += " far-left-column" 
    }
}

document.addEventListener("keydown", function (event) {
    const keyName = event.key 
    if (keyName === "ArrowUp") {
        direction = -width;
    } else if (keyName === "ArrowDown") {
        direction = + width;
    } else if (keyName === "ArrowRight") {
        direction = 1;
    } else if (keyName === "ArrowLeft") {
        direction = -1;
    } 
})

function startingSnake () {
   snake = [1, 0];
    for (const snakeCell of snake) {
        gameBoardCell[snakeCell].classList.add("snake");
    } 
}

//what if apple trys to generate where snake already is?
function generateRandomApple (gameBoardCell) {
    let apple = gameBoardCell[Math.floor(Math.random() * gameBoardCell.length)];
    apple.classList.add("apple")
}


startButton.addEventListener("click", function() { //disable start button after one click
    direction = 1;
    startGame();
    this.disabled = true;
});


let intervalRate = 1000;
function startGame () {
    // clearInterval(interval)
    interval = setInterval(tick, intervalRate, gameBoardCell);
    direction = 1;
}

scoreDisplay.innerHTML = "Score: " + score;



function tick (gameBoardCell) {
    if (direction !== 0) {
        let tail = snake.pop();
        gameBoardCell[tail].classList.remove("snake");
        snake.unshift(snake[0] + direction)
        gameBoardCell[snake[0]].classList.add("snake");
        eatApple(gameBoardCell, tail);
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


//if snake hits something do this

playAgain.addEventListener("click", function(){
    resetGame();
  })

function resetGame () {
    gameBoard.innerHTML = ""; //get this working
    score = 0;
    scoreDisplay.innerHTML = "Score: " + score;
    clearInterval(interval); //need to reset interval before new game starts
    makeGameBoard();
    startingSnake();
    generateRandomApple(gameBoardCell);
    startButton.removeAttribute('disabled');
}