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

function getWinner(playerScore, computerScore) {
  console.log(`Final Score: ${playerScore}-${computerScore}`);
  if (playerScore > computerScore) return "You won, congrats!";
  else if (playerScore == computerScore)
    return "You tied against the computer!";
  else return "You lose, better luck next time!";
}

function game() {
  const rounds = 5;
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  console.log("Rock, Paper, Scissors Game");
  for (let i = 0; i < rounds; i++) {
    console.log(
      `Round ${i + 1} (Current Score: ${playerScore}-${computerScore})`
    );
    playerSelection = prompt("Choose rock, paper, or scissors: ");
    while (!options.includes(playerSelection.toLowerCase())) {
      playerSelection = prompt("Invalid Option. Choose your weapon: ");
    }
    const result = playRound(playerSelection, computerPlay());
    if (result.substring(0, 7) == "You Win") playerScore += 1;
    else if (result.substring(0, 8) == "You Lose") computerScore += 1;
    console.log(result);
    console.log("-----------------------------------");
  }
  console.log(getWinner(playerScore, computerScore));
}
