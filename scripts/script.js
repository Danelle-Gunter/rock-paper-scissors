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
    let choice = "";
    do {
        choice = prompt("Select ROCK, PAPER, or SCISSORS: ").toLowerCase();    
    }
    while (!validateChoice(choice));
    return choice;
};

function validateChoice(rps) {
    switch(rps){
        case 'paper':
        case 'rock':
        case 'scissors':
            return true;
        default:
            return false;
    }
}

/**
 * Plays a single round of the game
 * 
 * @param {string} computer A choice from the program
 * @param {string} player An input from the player
 * 
 */
function playGame(computer, player) {
    // for testing purposes
    console.log("Computer: " + computer);
    console.log("Player: " + player);

    // Using length b/c js is like that
    if (computer.length === player.length) {
        // computer and user pick the same thing
        console.log("Tie!");
    } else {
        console.log("NO TIE");
    } 
    //else if (computer.length < player.length)
        // computer picks rock
        // computer picks paper
        // user picks paper
        // user picks scissors
    // computer picks paper
        // user picks rock
        // user picks scissors
    // computer picks scissors
        // user picks paper
        // user picks rock
}

playGame(computerSelection(), playerSelection());