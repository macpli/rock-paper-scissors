/*
rock = 0
paper = 1
scissors = 2

*/


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 );

    return choice;
}

function playerChoice() {
    let choice = prompt("Chose");
    choice = choice.toLocaleLowerCase();

    if(choice == "rock"){
        choice = 0;
    } else if(choice == "paper"){
        choice = 1;
    } else if(choice == "scissors"){
        choice = 2;
    }
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

function checkScore(playerScore, computerScore){
    let winner;
    if(playerScore > computerScore) {
        winner = "Player";
    } else if (playerScore < computerScore) {
        winner = "Computer";
    } else if (playerScore == computerScore) { 
        winner = "Tie";
    }

    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++ ) {
        
        winner = playRound(playerChoice(), getComputerChoice());

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

    console.log("The score is ", playerScore, computerScore);

    console.log(checkScore(playerScore, computerScore), " wins the game!!!");
}

game();