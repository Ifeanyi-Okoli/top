const playerText = document.querySelector('#player');
const computerText = document.querySelector('#computer');
const resultText = document.querySelector('#result');
const buttons = document.querySelectorAll('.choiceButton');
let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click" , () => {
    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}))

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player === computer){
        return "It's a tie!";
    } else if(player === "ROCK" && computer === "PAPER"){
        return "Computer wins!";
    } else if(player === "ROCK" && computer === "SCISSORS"){
        return "Player wins!";
    } else if(player === "PAPER" && computer === "ROCK"){
        return "Player wins!";
    } else if(player === "PAPER" && computer === "SCISSORS"){
        return "Computer wins!";
    } else if(player === "SCISSORS" && computer === "ROCK"){
        return "Computer wins!";
    } else if(player === "SCISSORS" && computer === "PAPER"){
        return "Player wins!";
    }
}
