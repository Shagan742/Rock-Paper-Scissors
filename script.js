




































































//codeacademy code that i dont know wtf its saying
const getUserChoice = (userInput) => {
  userInput=userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb') {
    return userInput;
  } else {
    console.log('no');
  }
};

function getComputerChoice() {
  const number=Math.floor(Math.random()*3);

  if(number===0) {
    return 'rock';
  } else if (number===1) {
    return 'scissors';
  } else if (number===2){
    return 'paper';
  } 
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice===computerChoice) {
    return 'tie';
  } 

  if (userChoice==='rock') {
    if (computerChoice==='paper') {
      return 'computer wins';
    } else if (computerChoice==='scissors') {
      return 'user wins';
    } else if (computerChoice==='rock') {
      return 'tie!';
    }
  }

  if (userChoice==='paper') {
    if (computerChoice==='paper') {
      return 'tie!';
    } else if (computerChoice==='rock') {
      return 'user wins';
    } else if (computerChoice==='scissors') {
      return 'computer wins';
    }
  }

  if (userChoice==='scissors') {
    if (computerChoice==='paper') {
      return 'user wins';
    } else if (computerChoice==='rock') {
      return 'computer wins';
    } else if (computerChoice==='scissors') {
      return 'tie!';
    }
  }

  if (userChoice==='bomb') {
    if (computerChoice==='paper') {
      return 'user wins';
    } else if (computerChoice==='scissors'){
      return 'user wins';
    } else if (computerChoice==='rock') {
      return 'user wins';
    }
  }
}

function playGame() {
  const userChoice=getUserChoice('bomb');
  const computerChoice=getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
