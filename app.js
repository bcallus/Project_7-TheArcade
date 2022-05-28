let gameBoard = document.getElementById("game-board");
let scoreDisplay = document.getElementsByClassName("score-display");
let snake = [gameBoard[0]];
let score = 0;
let intervalTime = 0;
let interval = 0;

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
        for (let j = 0; j < 20; j++) {
        let gameBoardCell = document.createElement("td")
        gameBoardRow.appendChild(gameBoardCell);
        gameBoardCell.className = "game-board-cell"
        }
    }
}

function startGame () {
    let gameBoardCell = document.getElementsByClassName("game-board-cell");
    // randomApple (gameBoardCell);
    // direction =
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    snake = [2, 1, 0];
    currentIndex = 0;
    snake.forEach((index) => gameBoardCell[index].classList.add("snake"));
    // interval = setInterval(moveOutcome, intervalTime); //moveOutcome is a function, call it snakeMovement
}

makeGameBoard()
startGame()

