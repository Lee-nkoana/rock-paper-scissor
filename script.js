//array  of the available options the computer and user can pick from
const options = ["rock", "paper", "scissors"];

//Set starting score of user and computer to 0
let userScore = 0;
let computerScore = 0;

//Get a random option for the computer
function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];    
}

//function for each single round of the game
function playRound(playerPick, computerPick){
    //Setting the computers pick to be the out put of the getComputerChoice function
    let computerChoice = getComputerChoice();
    //prompt the user to enter their pick
    let usersChoice = prompt('pick between rock, paper, and scissors').toLowerCase();

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
    else{
        alert("Invalid option");
    }

    console.log("user score is: " + userScore);
    console.log("computer score is: " + computerScore);

    return(usersChoice, computerChoice);
}

function Game(){
    //looping over the playRound function until either the player or computer has a score of 5
    while((userScore < 5) || (computerScore < 5)){
        playRound();
        if(userScore == 5){
        console.log("Congratulations! You win!");
        }
        else if(computerScore == 5){
        console.log("Game over! Computer wins!");
        }
    }
}

Game();
