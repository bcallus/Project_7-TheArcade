# Project 7 - Synth Project - Arcade

For this project I will be building a classic snake arcade game.

The following are notes for myself in order to make my game function well and meet all of the requirements.

## Dont forget to...
* Frequently read the grading rubric to make sure I am hitting all of the necessary graded points

## General Rules - As a player, I should be able to...
* start the game by pressing a Start button
* use my arrow keys to change the direction of the snake
* have the snake grow correctly when it eats the apple
* have the game end if the snake tries to eat itself
* have the game end if the snake runs into a wall
* see how long my snake was when the game ended
* start the game over without having to reset the browser

## *Delightful* extras - Bonus Features
* set the difficulty (speed of snake)
* can keep track of my stats (maximum points, average points, etc.) between games

## Stretch Goals - Extra Bonus Features
* Have more than one thing to eat on the board at a time
    * Some speed you up (oh no!)
    * Some slow you down (oh yay!)
    * Some are poisonous to snakes, and change the controls while the snake is poisoned
    * Some cause super-growth (for the next 5 ticks the snake keeps getting bigger)
* Get rid of the walls, have the snake wrap around to the other side when they go "off screen"
* Add extra walls, grid elements which are dangerous to collide with
* Make the snake a little faster each time it eats something
* Make the grid size selectable
* Make a difficulty (speed) selector


## Things you must figure out in all games
* What is the starting state?
* How do I display the state of the game to the user?
* What controls/interface to I make available to the user?
* How does each interaction update the state?

## Game Loop - Specific to Snake

* The game loop is general: show state -> update state -> go back to step 1
* all the meanwhile the user can also interact, 
* and the game will update accordingly in real time.

Example game loop code:

```
// add to above
function tick() {
  // this is an incremental change that happens to the state every time you update...
  renderState()
}
setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible
// now you might have things like
document.addEventListener('keydown', function (event) {
  // here you might read which key was pressed and update the state accordingly
})
```

## Game State

* The snake has two important features
    1. a body
    2. an intended direction

    For example:
    ```
    let snake = {
  body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
  nextDirection: [1, 0]
    }
    ```

* There is a perpetual game tick - tick() - every time the game ticks:
    1. remove the "tail of the snake" (the sub-array at position 0) 
    2.  tack on a new "head" 
        * you can use the last sub-array and the **nextDirection** to generate the new final sub-array
    * if the snake is eating the apple, you only tack on a new head. you do not remove the tail of the snake.
* There is an intended next direction - nextDirection 

For example:
```
let gameState = {
  apple: [11, 8],
  snake: snake // from above
}
```

***

### Game Play
* Game starts by pressing start buton
    * snake automatically starts moving
    * the user must make a decision for the sake of the snake (aka change the direction)
        * the user changing the direction is a 'keydown' event
        * the keydown event contains data - aka the direction
        * you can set things like nextDirection property whenever the event fires
        * decide if the snake is allowed to move backwards (in on itself, or towards its own throat) or not as this will affect how gameplay feels
    * after each tick() you have to check if the snake hit a wall or itself
        * the head having the same value as anywhere in its body
        * the head having an index outside of the bounds of the grid
            *if either of these are true, the game is over
    * if the snake eats the apple:
        * the snake gets larger
        * a new apple is randomly generated to the board
    * you can see the snake length at the end of the game
    * the game is reset by pressing 'play again'

### Starting 

* need a table with rows and colums and cells.
  * createGameBoard function to create board
* need startGame function
  * need to have a snake
* need resetGame function
* need a generateRandomApple function
  * places the apple randomly after it is eaten or at the start of the game
* need a snakeMoveOrDie function
  * does the snake move ahead or does it hit something and die
* need a snakeHitChecker function
  * checks to see if the snake hit a wall or "bit" itself
* if the snake dies:
  * display GAME OVER
  * reset the interal in a resetInterval function
* if snake doesn't die:
  * move snake
    * pop the last index (that is the tail)
    * remove its class so the css dissapears 
    * add a cell and class to the head in the direction that it's going
* check hits
  * i do not like example so I will try it differenly 
    * give the top row and bottom row different IDs, and give the left most cells and right most cells different IDs
    * set the if statement to say "if the head of the snake is in the bottom row class name, and the direction is down), etc
    * use includes for the snake eating itself
  
