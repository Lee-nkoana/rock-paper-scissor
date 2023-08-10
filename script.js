const options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

console.log(options);
console.log("user score is " + userScore);
console.log("computer score is " + computerScore);

function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];    
}

let computerPick = getComputerChoice()
console.log(computerPick);

function playRound(){
    let playerPick = prompt('pick between rock, paper, and scissors');

    function getUserChoice(playerPick){
        return playerPick;
    }

    console.log(playerPick);
    getUserChoice();

    if(playerPick === computerPick){
        console.log("it is a tie");
    }
    else if((playerPick === "rock") && (computerPick === "paper")){
        computerScore++
        console.log("computer gets a point");
    }
    else if((playerPick === "rock") && (computerPick === "scissors")){
        userScore++
        console.log("player gets a point");
    }
    else if((playerPick === "paper") && (computerPick === "scissors")){
        computerPick++
        console.log("computer gets a point");
    }
    else if((playerPick === "paper") && (computerPick === "rock")){
        userScore++
        console.log("user gets a point");
    }
    else if((playerPick === "scissors") && (computerPick === "rock")){
        computerScore++
        console.log("computer gets a point")
    }
    else if((playerPick === "scissors") && (computerPick === "paper")){
        userScore++
        console.log("user gets a point")
    }
}

playRound();

console.log("user score is " + userScore);
console.log("computer score is " + computerScore);

