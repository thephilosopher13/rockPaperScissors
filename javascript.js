const rockPaperScissorsArray = ['rock', 'paper', 'scissors']

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

var computerChoice = getComputerChoice(rockPaperScissorsArray)
console.log(c   omputerChoice);