

let computerChoice;

let getComputerChoice = function() {

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