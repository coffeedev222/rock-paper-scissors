function getComputerChoice() {
    let result = Math.round(Math.random() * 3)
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

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors (any invalid choice will be considered a loss!)");
    return choice[0].toUpperCase() + choice.slice(1);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("It's a Tie!")
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Human Wins! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Human Wins! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Human Wins! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }
    else {
        console.log("Computer Wins! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++
    }
}

function playGame() {
    for(i=0; i < 5; i++)
    {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore > computerScore) {
        console.log("You have won the game!");
    }
    else if(computerScore > humanScore) {
        console.log("Computer has won the game!");
    }
    else {
        console.log("The game has ended in a draw!");
    }
    console.log("Final Score: " + "Human: " + humanScore + " Computer Score: " + computerScore);
    
}

playGame();