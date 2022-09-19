const selection = ["rock", "paper", "scissors"];

const winning = { scissors: "paper", rock: "scissors", paper: "rock" };

function getComputerChoice() {
  const selected = Math.floor(Math.random() * selection.length);
  return selection[selected];
}

function getPlayerChoice() {
  let choice = prompt("Enter your choice either, rock, paper or scissors");
  let choiceToLowercase = choice.toLowerCase();

  return choiceToLowercase;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("draw");
    return;
  }

  if (winning[playerSelection] === computerSelection) {
    console.log(`you win ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`you lose ${computerSelection} beats ${playerSelection}`);
  }
}

playRound(getPlayerChoice(), getComputerChoice());
