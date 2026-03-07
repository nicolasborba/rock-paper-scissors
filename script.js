

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

// basic logic of the game

computerChoice = getComputerChoice();
console.log(computerChoice);
getHumanChoice();
function playRound(humanChoice, computerChoice) {


  

}

playRound(humanChoice, computerChoice);