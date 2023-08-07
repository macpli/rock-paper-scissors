/*
rock = 0
paper = 1
scissors = 2

player = 1
computer = 2
tie = 3

*/
// Getting and creating DOM elements
const btnRock = document.getElementById('btnRock')
const btnPaper = document.getElementById('btnPaper')
const btnScissors = document.getElementById('btnScissors')
const btnAgain = document.createElement('button')
const btnContainer = document.querySelector('.buttonContainer')
const disPlayerScore = document.getElementById('disPlayerScore')
const disComputerScore = document.getElementById('disComputerScore')
const disRoundResult = document.createElement('div');

const gameResult = document.querySelector('.result')
const resultsContainer = document.querySelector('.resultsContainer')
disRoundResult.className = 'roundResult'

const playerWin = document.createElement('span')
playerWin.textContent = 'Player Wins!'

const computerWin = document.createElement('span')
computerWin.textContent = 'Computer Wins!'

btnAgain.textContent = 'Try Again'
btnAgain.className = 'btnAgain';

// Getting computer's choice
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
        disRoundResult.textContent = "Player wins the battle";
        resultsContainer.append(disRoundResult);
    } else if(winner == 2){
        computerScore += 1;
        console.log("Computer wins the battle");
        disRoundResult.textContent = "Computer wins the battle";
        resultsContainer.append(disRoundResult);
    } else if(winner == 0){
        console.log("Tie");
        disRoundResult.textContent = "The battle is a tie";
        resultsContainer.append(disRoundResult);
    } else {console.log("playRound ERROR");}
}

function checkScore(playerScore, computerScore, rounds){
    let winner;
    if(playerScore > computerScore && playerScore == rounds) {
        winner = 1;
    } else if (playerScore < computerScore && computerScore == rounds) {
        winner = 2;
    } else if (playerScore == computerScore && playerScore == rounds) { 
        winner = 3;
    }

    return winner;
}

const winCon = function(score) {
    let isMet;

    if(score == 1){
        console.log("Player wins the game");
        return isMet =1
    } else if (score == 2) {
        console.log("Computer wins the game");
        return isMet = 2
    } else if (score == 3) {
        console.log("The game is a tie");
        return isMet =3
    }
}

const finalResults = function() {
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
}

const completeRound = function(playerChoice) {
    scoreUpdate(winner = playRound(playerChoice, getComputerChoice()));
    checkScore(playerScore, computerScore, rounds);
    console.log(playerScore, computerScore);
    disComputerScore.textContent = computerScore;
    disPlayerScore.textContent = playerScore;

    if(winCon(checkScore(playerScore, computerScore, rounds)) == 1){
        finalResults();
        gameResult.textContent = "";
        gameResult.append(playerWin);
        btnContainer.append(btnAgain);
    } else if(winCon(checkScore(playerScore, computerScore, rounds)) == 2){
        finalResults();
        gameResult.textContent = "";
        gameResult.append(computerWin);
        btnContainer.append(btnAgain);
    } 
}

const RestartGame = function(){
    const btn = document.querySelector('.btnAgain');
    btn.remove();

    btnContainer.append(btnRock);
    btnContainer.append(btnPaper);
    btnContainer.append(btnScissors);
    playerScore = 0;
    computerScore = 0;
    disComputerScore.textContent = computerScore;
    disPlayerScore.textContent = playerScore;
    gameResult.textContent = 'Rock Paper Scissors';
}

const rounds = 3;
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => { 
    completeRound(0);
 })  

 btnPaper.addEventListener('click', () => { 
    completeRound(1);
 })

 btnScissors.addEventListener('click', () => { 
    completeRound(2);
 })

 btnAgain.addEventListener('click', RestartGame)

