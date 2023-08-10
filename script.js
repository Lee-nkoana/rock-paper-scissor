//aarray  of the available options the computer and user can pick from
const options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

console.log(options);
console.log("user score is " + userScore);
console.log("computer score is " + computerScore);

//Get a random option for the computer
function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];    
}

//Setting the computers pick to be the out put of the getComputerChoice function
let computerChoice = getComputerChoice()
console.log(computerChoice);

//function for each single round of the game
function playRound(playerPick, computerPick){
    if(usersChoice.toLowerCase() === computerChoice){
        console.log("it is a tie");
    }
    else if((usersChoice.toLowerCase() === "rock") && (computerChoice === "paper")){
        computerScore++
        console.log("computer gets a point");
    }
    else if((usersChoice.toLowerCase() === "rock") && (computerChoice === "scissors")){
        userScore++
        console.log("player gets a point");
    }
    else if((usersChoice.toLowerCase() === "paper") && (computerChoice === "scissors")){
        computerPick++
        console.log("computer gets a point");
    }
    else if((usersChoice.toLowerCase() === "paper") && (computerChoice === "rock")){
        userScore++
        console.log("user gets a point");
    }
    else if((usersChoice.toLowerCase() === "scissors") && (computerChoice === "rock")){
        computerScore++
        console.log("computer gets a point");
    }
    else if((usersChoice.toLowerCase() === "scissors") && (computerChoice === "paper")){
        userScore++
        console.log("user gets a point");
    }
    else{
        alert("Invalid option");
    }

    console.log("user: " + userScore);
    console.log("computer: " + computerScore);

    return(console.log(usersChoice, computerChoice));
}

//prompt the user to enter their pick
let usersChoice = prompt('pick between rock, paper, and scissors');

playRound();


