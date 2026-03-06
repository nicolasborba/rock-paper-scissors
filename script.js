

let computerChoice;

function getComputerChoice() {

  // find a random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  switch (randomNumber) {
    case 1:  
      return "Rock";
    case 2:
      return "Paper";
    default:
      return "Scissors";
  }

}

computerChoice = getComputerChoice();
console.log(computerChoice);

let humanChoice;
let humanNumber

function getHumanChoice() {

  // get the player choice
  humanNumber = prompt("Do you choose Rock, Paper or Scissors? Enter 1 for Rock, 2 for Paper and 3 for Scissors");
  humanNumber = Number(humanNumber);
  console.log(humanNumber);

  switch (humanNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    default:
      return "Scissors";
  }
}

humanChoice = getHumanChoice();
console.log(humanChoice);


let humanScore = 0;
let computerScore = 0;

// basic logic of the game

function playRound(humanChoice, computerChoice) {
  
}