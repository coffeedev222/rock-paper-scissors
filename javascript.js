console.log("Hello World")

//Get Computer generated choice
function getComputerChoice() {
    let result = Math.round(Math.random(3))
    if(result === 0) {
        result = "Rock";
    }
    else if(result === 1) {
        result = "Paper";
    }
    else{
        result = "Scissors";
    }
    return result
} 

console.log(getComputerChoice());

//Get Human input for their choice
let getHumanChoice = function() {
    return prompt("Choose Rock, Paper, or Scissors");
    }

console.log(getHumanChoice());
//Store the score into a variable to keep count of score
//Create how round is played by taking Computers choice, and humans choice to determine the winner based on rules of rock paper scissors
//Create how the game is won by keeping tally of the score until 5 wins is reached by one player.