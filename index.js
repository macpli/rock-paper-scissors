/*
rock = 0
paper = 1
scissors = 2

*/
    const btnRock = document.getElementById('btnRock')
   const btnPaper = document.getElementById('btnPaper')
   const btnScissors = document.getElementById('btnScissors')
    const disPlayerScore = document.getElementById('disPlayerScore')
    const disComputerScore = document.getElementById('disComputerScore')


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 );
    return choice;
}

function playRound(playerChoice, getComputerChoice) {
    let result;

    if (playerChoice == 0 && getComputerChoice == 2) {
        result = 1;
    } else if (playerChoice == 0 && getComputerChoice == 1) {
        result = 2;
    } else if (playerChoice == 0 && getComputerChoice == 0){
        result = 0;
    }  else if (playerChoice == 1 && getComputerChoice == 0){
        result = 1;
    }  else if (playerChoice == 1 && getComputerChoice == 1){
        result = 0;
    }  else if (playerChoice == 1 && getComputerChoice == 2){
        result = 2;
    } else if (playerChoice == 2 && getComputerChoice == 0){
        result = 2;
    } else if (playerChoice == 2 && getComputerChoice == 1){
        result = 1;
    } else if (playerChoice == 2 && getComputerChoice == 2){
        result = 0;
    }

    return result;
}

const scoreUpdate = function(winner) {
    if(winner == 1){
        playerScore += 1;
        console.log("Player wins the battle");
    } else if(winner == 2){
        computerScore += 1;
        console.log("Computer wins the battle");
    } else if(winner == 0){
        console.log("Tie");
    } else {console.log("playRound ERROR");}
}

function checkScore(playerScore, computerScore, rounds){
    let winner;
    if(playerScore > computerScore && playerScore == rounds) {
        winner = 1;
    } else if (playerScore < computerScore && computerScore == rounds) {
        winner = 2;
    } else if (playerScore == computerScore && playerScore == rounds) { 
        winner = 0;
    }

    return winner;
}

const winCon = function(score) {
    if(score == 1){
        console.log("Player wins the game");
       
    } else if (score == 2) {
        console.log("Computer wins the game");
        
    } else if (score == 0) {
        console.log("The game is a tie");
        
    }
}

const rounds = 3;
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => { 
    scoreUpdate(winner = playRound(0, getComputerChoice()));
    checkScore(playerScore, computerScore, rounds);
    console.log(playerScore, computerScore);
    disComputerScore.textContent = computerScore;
    disPlayerScore.textContent = playerScore;

    winCon(checkScore(playerScore, computerScore, rounds));
 })  

 btnPaper.addEventListener('click', () => { 
    scoreUpdate(winner = playRound(1, getComputerChoice()));
    checkScore(playerScore, computerScore);
    console.log(playerScore, computerScore);
    disComputerScore.textContent = computerScore;
    disPlayerScore.textContent = playerScore;

    winCon(checkScore(playerScore, computerScore, rounds));
 })

 btnScissors.addEventListener('click', () => { 
    scoreUpdate(winner = playRound(2, getComputerChoice()));
    checkScore(playerScore, computerScore)
    console.log(playerScore, computerScore);
    disComputerScore.textContent = computerScore;
    disPlayerScore.textContent = playerScore;

    winCon(checkScore(playerScore, computerScore, rounds));
 })
