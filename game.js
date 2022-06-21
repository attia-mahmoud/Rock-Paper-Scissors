let options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return options[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "paper") return -1;
    if (computerSelection == "scissors") return 1;
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") return 1;
    if (computerSelection == "rock") return -1;
  } else {
    if (computerSelection == "scissors") return -1;
    if (computerSelection == "rock") return 1;
  }
  return 0;
}
