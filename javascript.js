const rockPaperScissorsArray = ['rock', 'paper', 'scissors']

var playerPoints = 0;
var computerPoints = 0;
let roundsPlayed = 0;
var endGame = false;

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    var computerChoice = array[randomIndex];
    return computerChoice
  }

var computerChoice = getComputerChoice(rockPaperScissorsArray)

function getPlayerChoice() {
  var playerChoiceInput = document.querySelector("[name='playerChoice']");;
  var playerChoiceValue = playerChoiceInput.value;
  var playerChoiceCaseInsensitive = playerChoiceValue.toLowerCase();
  return playerChoiceCaseInsensitive;
}

function playRockPaperScissors() {
  
  let computerChoice = getComputerChoice(rockPaperScissorsArray);
  let playerChoice = getPlayerChoice();

  if (playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock") {
    computerPoints++;
    roundsPlayed++;
    alert("You lose! " + computerChoice + " beats " + playerChoice + ". Player Points: " + playerPoints + ", Computer Points: " + computerPoints + ". Rounds Played: " + roundsPlayed);
  } else if (playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "rock" && computerChoice == "scissors" ) {
    playerPoints++;
    roundsPlayed++;
    alert("You Win! " + playerChoice + " beats " + computerChoice + ". Player Points: " + playerPoints + ", Computer Points: " + computerPoints + ". Rounds Played: " + roundsPlayed);
  } else if (playerChoice == computerChoice) {
    roundsPlayed++;
    alert("Draw! Both of you picked " + playerChoice + ". Player Points: " + playerPoints + ", Computer Points: " + computerPoints + ". Rounds Played: " + roundsPlayed);
  } else {
    alert("Invalid Input");
  }

  if (roundsPlayed == 5) {
    endGame = true;
    gameFinished();
  } 
}

function gameFinished() {
  if (endGame) {
    document.getElementById("gameButton").disabled = true
    if (playerPoints > computerPoints) {
      return alert("You win the match!")
    } else if (playerPoints < computerPoints) {
      return alert("You lose the match!")
    } else {
      return alert("Match draw!")
    }
  }
}





