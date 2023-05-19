
// FUNCTIONS 
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let compSelection;
    if (randNum === 1) {
        compSelection = 'Rock';
    } else if (randNum === 2) {
        compSelection = 'Paper' 
    } else {
        compSelection = 'Scissors'
    }
    return compSelection.toLowerCase()
};
function playerSelection () {
    let playerSelection = prompt('Rock, Paper or Scissors?: ')
    return playerSelection.toLowerCase()
};
function playRound (e, computerSelection) {

    const playerSelection = e.target.className;
    
    if (playerSelection === computerSelection) {
        div.textContent = `It's a tie!!!`;
        return null;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return true;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return true;
    } else if (playerSelection == 'scissors' && computerSelection === 'paper') {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return true;
    } else {
        div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return false;
    }
};
function testingEvent (a,b) {
    const playerSelection = a.target.className;
    console.log(playerSelection);
    console.log(b);
};
// VARIABLES
const buttons = document.querySelectorAll('button');
const div = document.querySelector('.display-results');

const divP = document.querySelector('.player-score');
const divC = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;
// GAME MACHINE
buttons.forEach(button => button.addEventListener('click', (button) => {    
    const point = playRound(button, getComputerChoice());
    if (playerScore < 5 && computerScore < 5) {
        if (point === true) {
            playerScore += 1;
        } else if (point === false) {
            computerScore += 1;
        };
    } else if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            div.textContent = 'YOU WIN THE GAME!!!!';
            playerScore = 0;
            computerScore = 0;
        } else {
            div.textContent = `YOU LOSE`;
            playerScore = 0;
            computerScore = 0;
        };
    };
    divP.textContent = playerScore;
    divC.textContent = computerScore;

}));


