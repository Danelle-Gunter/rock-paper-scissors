/**
 * Returns a random selection from the array
 * 
 * @returns {string} A random selection from the array
 */
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

console.log(getComputerChoice());