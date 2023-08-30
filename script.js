const options = ["rock", "paper", "scissors"]; 

let userScore = 0;
let computerScore = 0;

let msgWinner = "";

function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];    
}

//function for each single round of the game and how points are scored
function playRound(playerPick){
    let computerChoice = getComputerChoice();
    let usersChoice = playerPick;
    
    //Logic on which player gets a point
    if(usersChoice === computerChoice){
    }
    else if((usersChoice === "rock") && (computerChoice === "paper")){
        computerScore++
    }
    else if((usersChoice === "rock") && (computerChoice === "scissors")){
        userScore++
    }
    else if((usersChoice === "paper") && (computerChoice === "scissors")){
        computerScore++
    }
    else if((usersChoice === "paper") && (computerChoice === "rock")){
        userScore++
    }
    else if((usersChoice === "scissors") && (computerChoice === "rock")){
        computerScore++
    }
    else if((usersChoice === "scissors") && (computerChoice === "paper")){
        userScore++
    }

    //displaying the user and computer scores
    document.getElementById('userScore').textContent = `${userScore}`;
    document.getElementById('compScore').textContent = `${computerScore}`;

    //displaying user and computer picks
    document.getElementById('user_data').textContent = ` ${usersChoice} `;
    document.getElementById('comp_data').textContent = ` ${computerChoice} `;

    Game();
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
    document.querySelector('#btnNewGame').onclick = () =>{
        newGame();
    }
    document.getElementById("btnRock").disabled = false;
    document.getElementById("btnPaper").disabled = false;
    document.getElementById("btnScissors").disabled = false;
})

function Game(){
    if(userScore == 5){
        msgWinner = "Congratulations! You win!";
        document.getElementById('msg_box').textContent = `${msgWinner}`;
        document.getElementById("btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
    }
    else if(computerScore == 5){
        msgWinner = "Game over! Computer wins!";
        document.getElementById('msg_box').textContent = `${msgWinner}`;
        document.getElementById("btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
    }
}

Game();

function newGame(){
    userScore = 0;
    computerScore = 0;

     //displaying the user and computer scores
     document.getElementById('userScore').textContent = `${userScore}`;
     document.getElementById('compScore').textContent = `${computerScore}`;

      //displaying user and computer picks
    document.getElementById('user_data').textContent = " ";
    document.getElementById('comp_data').textContent = " ";

    document.getElementById('msg_box').textContent = " ";

    document.getElementById("btnRock").disabled = false;
    document.getElementById("btnPaper").disabled = false;
    document.getElementById("btnScissors").disabled = false;
 
}
