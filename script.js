const weapons = document.querySelectorAll("button");

weapons.forEach((child) => {
  child.addEventListener("click", (e) => {});
});

//possible selection from computer paspective
const selection = ["rock", "paper", "scissors"];

//what wins against what ?
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
    return "draw";
  }

  if (winning[playerSelection] === computerSelection) {
    return "user";
  } else {
    return "computer";
  }
}

function game() {
  const score = { user: 0, computer: 0, draw: 0 };
  // for (let i = 0; i < 5; i++) {
  //   let winner = playRound(getPlayerChoice(), getComputerChoice());
  //   if (winner === "user") {
  //     score.user++;
  //   } else if (winner === "computer") {
  //     score.computer++;
  //   } else if (winner === "draw") {
  //     score.draw++;
  //   }
  // }
  return score;
}
console.log(game());
