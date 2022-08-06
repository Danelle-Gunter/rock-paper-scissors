/**
 * Returns a random selection from the array
 * 
 * @returns {string} A random selection from the array
 */
let computerSelection = function() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
};

/**
 * Asks player for input and returns that input
 * 
 * @returns {string} Player's input
 */
let playerSelection = function() {
    let choice = prompt("Select ROCK, PAPER, or SCISSORS: ").toLowerCase();    
    return choice;
};

/**
 * Plays a single round of the game
 * 
 * @param {string} computerSelection A choice from that function
 * @param {string} playerSelection An input from that function
 * 
 */
// function playGame(computerSelection, playerSelection) {

// }

console.log(playerSelection());
console.log(computerSelection());