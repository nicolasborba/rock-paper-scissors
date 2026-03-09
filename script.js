

let computerChoice;

function getComputerChoice() {

  // find a random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    default:
      computerChoice = "scissors";
      break;
  }

  console.log(computerChoice);

}

let humanChoice;
let humanNumber

function getHumanChoice() {

  // get the player choice
  humanChoice = prompt("Do you choose Rock, Paper or Scissors?");
  humanChoice = humanChoice.toLowerCase();
  console.log(humanChoice);

}


let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// basic logic of the game

function playRound(humanChoice, computerChoice) {

  console.log(`You picked ${humanChoice}, the Machine picked ${computerChoice}.`)

  if (humanChoice == "rock") {

    if (computerChoice == "rock") {

      console.log("It's a draw! Both players chose Rock.");

    } else if (computerChoice == "paper") {

      console.log("You lost! Paper beats Rock.");
      computerScore++;

    } else {

      console.log("You won! Rock beats Scissors.");
      humanScore++;

    }

  } else if (humanChoice == "paper") {

    if (computerChoice == "rock") {

      console.log("You won! Paper beats Rock.");
      humanScore++;

    } else if (computerChoice == "paper") {

      console.log("It's a draw! Both players chose Paper.");

    } else {

      console.log("You lost! Scissors beats Paper.");
      computerScore++;

    }

  } else {

    if (computerChoice == "rock") {

      console.log("You lost! Rock beats Scissors.");
      computerScore++;

    } else if (computerChoice == "paper") {

      console.log("You won! Scissors beats Paper.");
      humanScore++;

    } else {

      console.log("It's a draw! Both players chose Scissors.");

    }

  }

  roundsPlayed++;
  console.log(`Rounds played: ${roundsPlayed} of 5.`)
  console.log("The score is:");
  console.log(`Human: ${humanScore}.`);
  console.log(`Machine: ${computerScore}.`);

}

while (roundsPlayed < 5) {

  getHumanChoice();
  getComputerChoice();
  playRound(humanChoice, computerChoice);

}

console.log("The game ended.")

if (humanScore == computerScore) {

  console.log(`Who would've guessed? It's a draw! Both you and the machine had ${humanScore} points.`);

} else if (humanScore > computerScore) {

  console.log(`You won the game! You had ${humanScore} points and the Machine had ${computerScore} points, making you the awesome winner!`);

} else {

  console.log(`Oh no! You lost! The machine overpowered you with ${computerScore} points, while you only had ${humanScore} points. Better luck in a next one!`);

}

