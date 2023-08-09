const options = ["Rock", "Paper", "Scissors"];

console.log(options);

function getComputerChoice(){
    console.log(options[(Math.floor(Math.random() * options.length))]);    
}

getComputerChoice()