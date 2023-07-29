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
        result = 1;
    } else if (playerChoice == "rock" && getComputerChoice == "paper") {
        result = 2;
    } else if (playerChoice == "rock" && getComputerChoice == "rock"){
        result = 0;
    }  else if (playerChoice == "paper" && getComputerChoice == "rock"){
        result = 1;
    }  else if (playerChoice == "paper" && getComputerChoice == "paper"){
        result = 0;
    }  else if (playerChoice == "paper" && getComputerChoice == "scissors"){
        result = 2;
    } else if (playerChoice == "scissors" && getComputerChoice == "rock"){
        result = 2;
    } else if (playerChoice == "scissors" && getComputerChoice == "paper"){
        result = 1;
    } else if (playerChoice == "scissors" && getComputerChoice == "scissors"){
        result = 0;
    } else {result="Wrong input. Try again."}

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
            playerScore += 1;
            computerScore += 1;
            console.log("Tie");
        } else {console.log("playRound ERROR");}

    }

    console.log("The score is ", playerScore, computerScore);

    console.log(checkScore(playerScore, computerScore), " wins the game!!!");
}

game();