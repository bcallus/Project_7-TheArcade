//Using How to Build a Snake Game In JavaScript from freeCodeCamp.org as a guide to help me through getting the game functioning. I am not just copying the work, I am working through all of its parts so that I have an understanding of what each part does. I am changing things when I am confident that I know of another way to achieve the same outcome. 

let gameBoard = document.getElementById("game-board");
let scoreDisplay = document.getElementsByClassName("score-display");
let snake = [gameBoard[0]];
let score = 0;
let intervalTime = 0;
let interval = 0;
let direction = 1; //adding one means to the right
let width = 20; //maybe change this if we allow the user to select a board size

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control); //control is a function that defines keycodes
    makeGameBoard();
    startGame();
    playAgain.addEventListener("click", replay); //replay is a function that defines 'play again', call it resetGame
  });


function makeGameBoard () {
    for (let i = 0; i < 20; i++) {
        let gameBoardRow = document.createElement("tr");
        gameBoard.appendChild(gameBoardRow);
        // gameBoardRow.className = "game-board-row"
        for (let j = 0; j < 20; j++) {
        let gameBoardCell = document.createElement("td")
        gameBoardRow.appendChild(gameBoardCell);
        gameBoardCell.className = "game-board-cell"
        }
    }
}

function startGame () {
    let gameBoardCell = document.getElementsByClassName("game-board-cell");
    generateRandomApple (gameBoardCell);
    direction = 1; //adding 1 is right
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    snake = [2, 1, 0];
    currentIndex = 0;
    snake.forEach((index) => gameBoardCell[index].classList.add("snake"));
    interval = setInterval(snakeMoveOrDie, intervalTime);
}

function snakeMoveOrDie () {
    let gameBoardCell = document.getElementsByClassName("game-board-cell");
    let gameOutcomeMessage = document.getElementsByClassName("game-outcome-message");
    if (snakeHitChecker(gameBoardCell)) {
        gameOutcomeMessage.innerHTML = "GAME OVER"
        return resetInterval(interval); 
    } else {
        moveSnake(gameBoardCell);
    }
}

function moveSnake (gameBoardCell) {
    let tail = snake.pop();
    gameBoardCell[tail].classList.remove("snake");
    snake.unshift(snake[0] + direction);
    eatApple(gameBoardCell, tail);
    gameBoardCell[snake[0]].classList.add("snake");
}

function snakeHitChecker (gameBoardCell) {
    let bottomRow = document.getElementById("game-board").lastChild;
    bottomRow.className = "bottom-row";
    let topRow = document.getElementById("game-board").firstChild;
    topRow.className = "top-row";
    if (gameBoardCell[snake[0] + direction].classList.contains("snake") || snake[0] === bottomRow && direction === width || snake[0] === topRow && direction === -width) { //still need right and left and need to test if top and bottom even works, //first part is correct, snake eating itself
        return true;
    } else {
        return false;
    }
}

function resetInterval () {

}

function generateRandomApple () {

}

function eatApple () {

}


//remove function calls that already exist in code above
makeGameBoard();
startGame();
snakeMoveOrDie();
snakeHitChecker();
resetInterval();
generateRandomApple();
moveSnake();
eatApple();

