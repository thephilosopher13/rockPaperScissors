const rockPaperScissorsArray = ['rock', 'paper', 'scissors']

const playerScore = document.querySelector('.playerScore')
let playerScoreCount = 0
const computerScore = document.querySelector('.computerScore')
let computerScoreCount = 0
var endGame = false;

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    var computerChoice = array[randomIndex];
    return computerChoice
  }

  // function getId actually is there to get the choice of the player
function getId(e) {
  const getPlayerChoice = e.target.id;
  return getPlayerChoice
}

const buttons = document.querySelectorAll(`button`);
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    
    let playerChoiceValue = getId(e);
    let computerChoiceValue = getComputerChoice(rockPaperScissorsArray);

    if (playerChoiceValue == "paper" && computerChoiceValue == "scissors" || playerChoiceValue == "rock" && computerChoiceValue == "paper" || playerChoiceValue == "scissors" && computerChoiceValue == "rock") {
      computerScoreCount++;
      alert("You lose! " + computerChoiceValue + " beats " + playerChoiceValue + ".");
      playerScore.textContent = "Player Score: " + playerScoreCount;
      computerScore.textContent = "Computer Score: " + computerScoreCount;
    } else if (playerChoiceValue == "paper" && computerChoiceValue == "rock" || playerChoiceValue == "scissors" && computerChoiceValue == "paper" || playerChoiceValue == "rock" && computerChoiceValue == "scissors" ) {
      playerScoreCount++;
      alert("You Win! " + playerChoiceValue + " beats " + computerChoiceValue + ".");
      playerScore.textContent = "Player Score: " + playerScoreCount;
      computerScore.textContent = "Computer Score: " + computerScoreCount;
    } else if (playerChoiceValue == computerChoiceValue) {
      alert("Draw!");
      playerScore.textcontent = "Player Score: " + playerScoreCount
      computerScore.textContent = "Computer Score: " + computerScoreCount
    } else {
      alert("Invalid Input");
    }
  });
});





