// GETTING THE HUMAN CHOICE
let rockOption = document
  .getElementById("rockoption")
  .addEventListener("click", rock);

let paperOption = document
  .getElementById("paperoption")
  .addEventListener("click", paper);

let scissorsOption = document
  .getElementById("scissorsoption")
  .addEventListener("click", scissors);

function rock() {
  let humanResp = document.getElementById("human");
  var humanChoice = "rock";
  humanResp.innerHTML = "&#x270A";
  playAround(humanChoice);
}
function scissors() {
  let humanResp = document.getElementById("human");
  var humanChoice = "scissors";
  humanResp.innerHTML = "&#x270C";
  playAround(humanChoice);
}
function paper() {
  let humanResp = document.getElementById("human");
  var humanChoice = "paper";
  humanResp.innerHTML = "&#x1FAF2";
  playAround(humanChoice);
}
// GETTING THE COMPUTER CHOICE
function getComputerChoice() {
  let computerResp = document.getElementById("comp");
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerResp.innerHTML = "&#x270A";
    return "rock";
  }
  if (computerChoice === 1) {
    computerResp.innerHTML = "&#x1FAF2";
    return "paper";
  } else {
    computerResp.innerHTML = "&#x270C";
    return "scissors";
  }
}

// PLAYING ROUNDS
let humanScore = 0;
let computerScore = 0;

function playAround(humanChoice) {
  let computerChoice = getComputerChoice();
  let result = document.getElementById("result");

  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    result.innerHTML = "It was a tie! Play again";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result.innerHTML = "You lost!";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = "You won!";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "You won!";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "You lost!";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = "You won!";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result.innerHTML = "You lost!";
    computerScore++;
  }
  // UPDATING THE SCORE
  let score = document.getElementById("score");
  score.innerHTML = `<strong>Computer</strong>: ${computerScore} <br> <strong>You</strong>: ${humanScore}`;

  // SETTING THE SCORE TO FINISH AT 5 POINTS AND THEN RESETING THE SCORE TO 0
  if (computerScore === 5) {
    score.innerHTML = "GAME OVER Computer won!";
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    score.innerHTML = "GAME OVER! You Won! Congratulations!";
    computerScore = 0;
    humanScore = 0;
  }
}
