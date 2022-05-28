let gameBoard = document.getElementById("game-board");
let snake;

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control); //control is a function that defines keycodes
    makeGameBoard();
    startGame();
    playAgain.addEventListener("click", replay); //replay is a function that defines 'play again'
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

}

makeGameBoard()
startGame()

