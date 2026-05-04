let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.34) return "rock";
  else if (choice <= 0.67) return "paper";
  else return "scissors";
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  roundsPlayed++;

  if (humanChoice === computerChoice) alert("It's a tie!");
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You won!");
    humanScore++;
  } else {
    alert("You lost!");
    computerScore++;
  }

  if (roundsPlayed === 5) {
    if (humanScore > computerScore) alert(`You won the game ${humanScore}:${computerScore}`);
    else if (humanScore === computerScore) alert("It's a tie!");
    else alert(`You lost the game ${humanScore}:${computerScore}`);
  }
}


// attach listeners to all 3 buttons once
document.querySelector(".rock").addEventListener("click", () => playRound("rock"));
document.querySelector(".paper").addEventListener("click", () => playRound("paper"));
document.querySelector(".scissors").addEventListener("click", () => playRound("scissors"));
