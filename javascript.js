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
}
// just for testing 
// console.log(getComputerChoice())
// b)
function playerSelection () {
    let playerSelection = prompt('Rock, Paper or Scissors?: ')
    return playerSelection.toLowerCase()
}
// just for testing
// console.log(playerSelection())
// c)
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
}
// console.log(playRound(playerSelection(), getComputerChoice()))
// d)
// function game() {
//     // variables
//     let gameOn = true;
//     // let rounds = 5;
//     let playerScore = 0;
//     let computerScore = 0;
//     let gameresult;
//     while (gameOn) {
//         // decreases the number of rounds 
//         // rounds -= 1
//          // play new round
//          gameresult = playRound('rock',getComputerChoice());             
//         // score
//         if (gameresult === true) {
//             playerScore += 1;
//         } else if (gameresult === false) {
//             computerScore += 1;
//         }
//         // just testing
//         console.log(playerScore, computerScore) 
//         // // rounds checking
//         // if (rounds <= 0) {
//         //     // calculate winner
//         if (playerScore > computerScore) {
//             console.log('YOU WIN THE GAME!!!');
//         } else 
        
//         if (playerScore === computerScore) {
//             console.log("It's a tie!!!");
//         } else {
//             console.log('Sorry, you lose the game');
//         }
//         gameOn = false;
//     }
        
//     }

// game()

// Buttons
// const rockButton = document.querySelector('.rock');
// const paperButton = document.querySelector('.paper');
// const scisButton = document.querySelector('.scissors');

function testingEvent (a,b) {
    const playerSelection = a.target.className;
    console.log(playerSelection);
    console.log(b);
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (button) => {
    playRound(button, getComputerChoice());
}));

const div = document.querySelector('.display-results');
