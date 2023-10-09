// ###############################################################################
// Scissor Paper Rock

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const ResultText = document.getElementById("ResultText");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetGameBtn = document.getElementById("resetGameBtn");
let player;
let computer;
let result;
var countplayer = 0;;
var countComputer = 0;

resetGameBtn.onclick = function(){
    countplayer = 0;
    countComputer = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

choiceBtns.forEach(button => button.addEventListener("click", () => {

    computerTurn();
    player = button.textContent;
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resultText.textContent = result;
    if (result == "You Win!") {
        countplayer += 1;
        playerScore.textContent = countplayer;
    }
    if (result == "You Lose!") {
        countComputer += 1;
        computerScore.textContent = countComputer;
    }
}));

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
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
function checkWinner() {
    if (player == computer) {
        result = "Draw!";
    }
    else if (computer == "ROCK") {
        result = (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if (computer == "PAPER") {
        result = (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if (computer == "SCISSORS") {
        result = (player == "ROCK") ? "You Win!" : "You Lose!"
    }
    return result;
}