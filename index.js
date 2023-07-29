console.log("Hello world!");

// Random computer choice
//      - Math.random(1-3)
//     
// User input
//      - prompt
//      - case insensitive
//
// Compare and decide winner
// Add point
// BO3 


function getComputerChoice() {
    let choice;
    let x = Math.floor(Math.random() * 3 );
    
    if (x == 0) {
        choice = "rock";
    } else if (x==1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function playerChoice() {
    let choice = prompt("Chose");
    return choice.toLocaleLowerCase();
}

function playRound(playerChoice, getComputerChoice) {
    let result;

    if (playerChoice == "rock" && getComputerChoice == "scissors") {
        result = "Player wins";
    } else if (playerChoice == "rock" && getComputerChoice == "paper") {
        result = "Computer wins";
    } else if (playerChoice == "rock" && getComputerChoice == "rock"){
        result = "Tie";
    }  else if (playerChoice == "paper" && getComputerChoice == "rock"){
        result = "Player wins";
    }  else if (playerChoice == "paper" && getComputerChoice == "paper"){
        result = "Tie";
    }  else if (playerChoice == "paper" && getComputerChoice == "scissors"){
        result = "Computer wins";
    } else if (playerChoice == "scissors" && getComputerChoice == "rock"){
        result = "Computer wins";
    } else if (playerChoice == "scissors" && getComputerChoice == "paper"){
        result = "Player wins";
    } else if (playerChoice == "scissors" && getComputerChoice == "scissors"){
        result = "Tie";
    } else {result="Wrong input. Try again."}

    return result;
}

console.log(playRound(playerChoice(), getComputerChoice()));