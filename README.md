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
* an set the difficulty (speed of snake)
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
```let gameState = {
  apple: [11, 8],
  snake: snake // from above
}
```
