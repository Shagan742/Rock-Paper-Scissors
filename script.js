function getComputerChoice() {
  const number=Math.floor(Math.random()*3);

  if(number===0) {
    return 'rock';
  } else if (number===1) {
    return 'scissors';
  } else if (number===2) {
    return 'paper';
  } 
}

function showUserChoice(userChoice) {
  if (userChoice==='rock') {
      document.getElementById('userChoicePutLargerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
      document.getElementById('userChoicePutMediumScreen').innerHTML= "<img src='imgs/pngegg.png'>";
      document.getElementById('userChoicePutSmallerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
  } else if(userChoice==='scissors') {
      document.getElementById('userChoicePutLargerScreen').innerHTML="<img src='imgs/scissors.png'>";
      document.getElementById('userChoicePutMediumScreen').innerHTML="<img src='imgs/scissors.png'>";
      document.getElementById('userChoicePutSmallerScreen').innerHTML="<img src='imgs/scissors.png'>";
  } else if (userChoice==='paper') {
      document.getElementById('userChoicePutLargerScreen').innerHTML="<img src='imgs/paper.png'>";
      document.getElementById('userChoicePutMediumScreen').innerHTML="<img src='imgs/paper.png'>";
      document.getElementById('userChoicePutSmallerScreen').innerHTML="<img src='imgs/paper.png'>";
  } 
}

function showComputerChoice(computerChoice) {
      if (computerChoice==='rock') {
        document.getElementById('computerChoicePutLargerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
        document.getElementById('computerChoicePutMediumScreen').innerHTML= "<img src='imgs/pngegg.png'>";
        document.getElementById('computerChoicePutSmallerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
    } else if(computerChoice==='scissors') {
        document.getElementById('computerChoicePutLargerScreen').innerHTML="<img src='imgs/scissors.png'>";
        document.getElementById('computerChoicePutMediumScreen').innerHTML="<img src='imgs/scissors.png'>";
        document.getElementById('computerChoicePutSmallerScreen').innerHTML="<img src='imgs/scissors.png'>";
    } else if (computerChoice==='paper') {
        document.getElementById('computerChoicePutLargerScreen').innerHTML="<img src='imgs/paper.png'>";
        document.getElementById('computerChoicePutMediumScreen').innerHTML="<img src='imgs/paper.png'>";
        document.getElementById('computerChoicePutSmallerScreen').innerHTML="<img src='imgs/paper.png'>";
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

}

function playGame(userChoice) {
  const computerChoice=getComputerChoice();

  showUserChoice(userChoice);
  showComputerChoice(computerChoice);
 

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

