/**
 * Returns a random selection from the array for a computer's choice
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
function playRound(computer, player) {
    let compWins = `Computer wins! ${computer} beats ${player}`;
    let playWins = `Player wins! ${player} beats ${computer}!`;
    // let winner = "";

    // Using length b/c js is like that
    // Since each word is of a different length, I am only comparing lengths.
    if (computer.length === player.length) {
        // computer and user pick the same thing
        return `Tie! ${player} matches ${computer}!`;
    } else if (computer.length === 4) { // computer = ROCK
        if (player.length === 5) {
            return playWins;
        } else {
            return compWins;  
        }
    } else if (computer.length === 5) { // computer = PAPER
        if (player.length === 8) {
            return playWins;
        } else {
            return compWins;
        }
    } else if (computer.length === 8) { // computer = SCISSORS
        if (player.length === 4) {
            return playWins;
        } else {
            return compWins;
        }
    }
}

/**
 * Plays game 5 times, keeps score, and reports a winner and loser at the end
 * 
 * @returns {string} The results of the game
*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let scoreResults = "";

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        let gameResults = playRound(computerSelection(), playerSelection());
        switch (gameResults.charAt(0)) {
            case 'P':
                playerScore++;
                break;
            case 'C':
                computerScore++;
                break;
            default:
                break;
        }
        console.log(gameResults);
    }

    scoreResults = `${playerScore} - ${computerScore}`;

    if (playerScore === computerScore) {
        console.log(`A tie! ${scoreResults}`);
    } else if (playerScore > computerScore) {
        console.log(`Player wins! ${scoreResults}`);
    } else {
        console.log(`Computer wins! ${scoreResults}`);
    }
}

//game();
