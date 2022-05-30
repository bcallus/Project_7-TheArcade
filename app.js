const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score-display");
const gameBoardCell = document.getElementsByClassName("game-board-cell");
let width = 20; //maybe change this if we allow the user to select a board size
let snake;
let apple;
let score = 0;
let direction;

document.addEventListener("DOMContentLoaded", function () {
    direction = 0;
    const startButton = document.getElementById("start-button") //need to disable this after one click, it is still changing the direction if you use it during game play
    startButton.addEventListener("click", function() {
        direction = 1;
    })
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
        gameBoardRow.lastChild.classList += " test" //change to right side cells and add left side cells
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

  //what if apple trys to generate where snake already is?
function generateRandomApple (gameBoardCell) {
    apple = gameBoardCell[Math.floor(Math.random() * gameBoardCell.length)];
    apple.classList.add("apple")
}

function startingSnake () {
    snake = [1, 0];
    for (const snakeCell of snake) {
        gameBoardCell[snakeCell].classList.add("snake");
    } 
}

function startGame () {
    let newGame = {
        score: 0,
        interval: 0,
        snake: startingSnake(),
        apple: generateRandomApple(gameBoardCell),
    }
}


    scoreDisplay.innerHTML = "Score: " + score;
    setInterval(tick, 1000, gameBoardCell) //not sure yet


function tick (gameBoardCell) {
 let tail = snake.pop();
 gameBoardCell[tail].classList.remove("snake");
 snake.unshift(snake[0] + direction)
 gameBoardCell[snake[0]].classList.add("snake");
}

function resetGame () {
    gameBoard.innerHTML = ""; //get this working
    // clearInterval(); //need to reset interval before new game starts
    makeGameBoard();
    startGame();
}





makeGameBoard();
startGame();
// generateRandomApple();
// tick();
defineSnake();

//everything above is my own
//for below: Using How to Build a Snake Game In JavaScript from freeCodeCamp.org as a guide to help me through getting the game functioning. I am not just copying the work, I am working through all of its parts so that I have an understanding of what each part does. I am changing things when I am confident that I know of another way to achieve the same outcome. 

// let intervalTime = 0; //turn this into a tick function
// let interval = 0;


// function startGame () {
//     const gameBoardCell = document.getElementsByClassName("game-board-cell");
//     generateRandomApple (gameBoardCell);
//     snake = [1, 0];
//     direction = 1; 
//     scoreDisplay.innerHTML = "Score: " + score;
//     intervalTime = 1000;
//     snake.forEach((index) => gameBoardCell[index].classList.add("snake"));
//     clearInterval(interval);
//     interval = setInterval(snakeMoveOrDie, intervalTime);
// }

// function snakeMoveOrDie () {
//     const gameBoardCell = document.getElementsByClassName("game-board-cell");
//     const gameOutcomeMessage = document.getElementsByClassName("game-outcome-message");
//     if (snakeHitChecker(gameBoardCell)) {
//         gameOutcomeMessage.innerHTML = "GAME OVER";
//         return setInterval(interval); //should be clearInterval but then start button doesnt work. added clearInterval to startGame, seemed to fix multiple issues
//     } else {
//         moveSnake(gameBoardCell);
//     }
// }

// //this would be the tick function
// function moveSnake (gameBoardCell) {
//     let tail = snake.pop();
//     gameBoardCell[tail].classList.remove("snake");
//     snake.unshift(snake[0] + direction);
//     eatApple(gameBoardCell, tail);
//     gameBoardCell[snake[0]].classList.add("snake");
// }

// function snakeHitChecker (gameBoardCell) {
//     const bottomRow = document.getElementById("game-board").lastChild;
//     bottomRow.className = "bottom-row";
//     const topRow = document.getElementById("game-board").firstChild;
//     topRow.className = "top-row";
//     if (gameBoardCell[snake[0] + direction].classList.contains("snake") || snake[0] === bottomRow && direction === width || snake[0] === topRow && direction === -width) { //still need right and left and need to test if top and bottom even works, //first part is correct, snake eating itself
//         return true;
//     } else {
//         return false;
//     }
// }

// function eatApple (gameBoardCell, tail) {
//     let speed = .9;
// if (gameBoardCell[snake[0]].classList.contains("apple")) {
//     gameBoardCell[snake[0]].classList.remove("apple");
//     gameBoardCell[tail].classList.add("snake");
//     snake.push(tail);
//     generateRandomApple(gameBoardCell);
//     score++;
//     scoreDisplay.textContent = score;
//     clearInterval (interval);
//     intervalTime *= speed;
//     interval = setInterval(snakeMoveOrDie, intervalTime);
// }
// }

// //if snake gets to be a certain length, open up other things on the board.

// function resetGame () {
//     gameBoard.innerHTML = ""; //get this working
//     makeGameBoard();
//     startGame();
// }



// //remove function calls that already exist in code above
// snakeMoveOrDie();
// snakeHitChecker();
// moveSnake();
// eatApple();

// //dont forget!!!
// //fix the score and inner HTML text
// //add instructions: right now game starts whehn right or down arrows are pressed or start is clicked
