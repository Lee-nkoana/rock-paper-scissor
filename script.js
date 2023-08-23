const options = ["rock", "paper", "scissors"]; 

let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];    
}

//function for each single round of the game and how points are scored
function playRound(playerPick){
    let computerChoice = getComputerChoice();
    let usersChoice = playerPick;
    console.log(usersChoice);

    console.log("user picked: "+ usersChoice);
    console.log("computer picked: "+ computerChoice);
    
    //Logic on which player gets a point
    if(usersChoice === computerChoice){
        console.log("it is a tie");
    }
    else if((usersChoice === "rock") && (computerChoice === "paper")){
        computerScore++
        console.log("computer gets a point");
    }
    else if((usersChoice === "rock") && (computerChoice === "scissors")){
        userScore++
        console.log("player gets a point");
    }
    else if((usersChoice === "paper") && (computerChoice === "scissors")){
        computerScore++
        console.log("computer gets a point");
    }
    else if((usersChoice === "paper") && (computerChoice === "rock")){
        userScore++
        console.log("user gets a point");
    }
    else if((usersChoice === "scissors") && (computerChoice === "rock")){
        computerScore++
        console.log("computer gets a point");
    }
    else if((usersChoice === "scissors") && (computerChoice === "paper")){
        userScore++
        console.log("user gets a point");
    }

    console.log("user score is: " + userScore);
    console.log("computer score is: " + computerScore);

    return computerChoice;

}

//getting user input and playing round on click
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btnRock').onclick = ()=>{
        playRound('rock');
    };
    document.querySelector('#btnPaper').onclick = ()=>{
        playRound('paper');
    };
    document.querySelector('#btnScissors').onclick = ()=>{
        playRound('scissors');
    };
})

function Game(){
    if(userScore = 5){
    console.log("Congratulations! You win!");
    }
    else if(computerScore = 5){
    console.log("Game over! Computer wins!");
    }
}

Game();

function newGame(){
    userScore = 0;
    computerScore = 0;
}