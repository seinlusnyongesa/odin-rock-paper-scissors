const weapons = document.querySelectorAll("button");
const userUI = document.querySelector(".playerScore");
const computerUI = document.querySelector(".computerScore");
const drawUI = document.querySelector(".draw");
const whoWonARound = document.querySelector(".whoWon");

weapons.forEach((child) => {
  child.addEventListener("click", (e) => {
    const scores = myGame(e);
    if (scores.winner === "computer") {
      whoWonARound.textContent = `You Lost, ${scores.computerChoice} beats ${scores.playerChoice}`;
    }

    if (scores.winner === "user") {
      whoWonARound.textContent = `You Won, ${scores.playerChoice} beats ${scores.computerChoice}`;
    }

    if (scores.winner === "draw") {
      whoWonARound.textContent = `You  Draw, ${scores.playerChoice} and ${scores.computerChoice} draws `;
    }
    userUI.textContent = scores.score.user;
    computerUI.textContent = scores.score.computer;
    drawUI.textContent = scores.score.draw;
    console.log(scores);
  });
});

//possible selection from computer paspective
const selection = ["rock", "paper", "scissors"];

//what wins against what ?
const winning = { scissors: "paper", rock: "scissors", paper: "rock" };

function getComputerChoice() {
  const selected = Math.floor(Math.random() * selection.length);
  return selection[selected];
}

function getPlayerChoice(myChoice) {
  let choice = myChoice.toLowerCase();

  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  }
  if (winning[playerSelection] === computerSelection) return "user";

  if (winning[computerSelection] === playerSelection) return "computer";
}

function game() {
  const score = { user: 0, computer: 0, draw: 0 };
  function roundWinner(e) {
    const playerChoice = getPlayerChoice(e.target.id);
    const computerChoice = getComputerChoice();
    const winner = playRound(playerChoice, computerChoice);
    if (winner === "user") {
      score["user"]++;
    } else if (winner === "draw") {
      score["draw"]++;
    } else if (winner === "computer") {
      score["computer"]++;
    }

    return { score, winner, playerChoice, computerChoice };
  }

  return roundWinner;
}

// create a closure to keep track of the score
const myGame = game();
