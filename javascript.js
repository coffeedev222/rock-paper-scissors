//Variables
let selectedRock = document.getElementById("rock-btn");
let selectedPaper = document.getElementById("paper-btn");
let selectedScissors = document.getElementById("scissors-btn");
let winnerPrompt = document.getElementById("announce-container");
let winnerBox = document.getElementById("winner-box");
let closebtn = document.getElementById("close-btn");
let lastRoundResults = document.getElementById("last-round-results");
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

//Event Listeners
selectedRock.addEventListener("click", function(){
    let computerChoice = getComputerChoice();
    let humanChoice = 'Rock';
    playRound(humanChoice, computerChoice);
    displayScore();
    decalreWinner();
});


selectedPaper.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let humanChoice = 'Paper';
    playRound(humanChoice, computerChoice);
    displayScore();
    decalreWinner();
});


selectedScissors.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let humanChoice = 'Scissors';
    playRound(humanChoice, computerChoice);
    displayScore();
    decalreWinner();
});

closebtn.addEventListener("click" , function() {
    winnerPrompt.style.display = "none";
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
    displayScore();
    lastRoundResults.innerHTML = " ";
})

//functions
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

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        lastRoundResults.innerHTML = "It was a tie!";
        tieScore++;

    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        lastRoundResults.innerHTML = "Human Wins! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        lastRoundResults.innerHTML = "Human Wins! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        lastRoundResults.innerHTML = "Human Wins! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
    }
    else {
        lastRoundResults.innerHTML = "Computer Wins! " + computerChoice + " beats " + humanChoice + "!";
        computerScore++
    }
}

function displayScore() {
    let score = document.getElementById("score").innerText = "Human: " + humanScore + " Computer: "  + computerScore + " Ties: " + tieScore;
}

function decalreWinner() {
    if(humanScore === 5) {
        winnerBox.innerText = "Human Wins Play Again?";
        winnerPrompt.style.display = "block";
    } 
    if (computerScore === 5) {
        winnerBox.innerText = "Computer Wins Play Again?";
        winnerPrompt.style.display = "block";
    }
}