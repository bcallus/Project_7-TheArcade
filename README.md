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

## Things you must figure out in all games
* What is the starting state?
* How do I display the state of the game to the user?
* What controls/interface to I make available to the user?
* How does each interaction update the state?

## Game State/Loop - Specific to Snake

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