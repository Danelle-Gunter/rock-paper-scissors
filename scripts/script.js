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

/**
 * Takes player input and compares to what should be used
 * 
 * @param {string} rps Player's input 
 * @returns If the input was correct
 */
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

    let compWins = "Computer wins!";
    let playWins = "Player wins!";

    // Using length b/c js is like that
    if (computer.length === player.length) {
        // computer and user pick the same thing
        console.log("Tie!");
    } else if (computer.length === 4) { // computer = ROCK
        (player.length === 5) ? console.log(playWins) :
        console.log(compWins);  
    } else if (computer.length === 5) { // computer = PAPER
        (player.length === 8) ? console.log(playWins) :
        console.log(compWins);
    } else if (computer.length === 8) { // computer = SCISSORS
        (player.length === 4) ? console.log(playWins) :
        console.log(compWins);
    }
}

playGame(computerSelection(), playerSelection());