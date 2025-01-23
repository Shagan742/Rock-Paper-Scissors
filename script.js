// username login idk stuff
let userName=document.getElementById('userName').innerText.charLength;

function submitUserName(userName) {
  if (userName>0) {
    document.getElementById('greeting').innerText=`Hello ${userName}!`;
    return `Hello ${userName}!!`
  } else {
    return 'Hello stranger!';
  }
}

submitUserName();


//the game
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
      document.getElementById('userChoicePutSmallerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
  } else if(userChoice==='scissors') {
      document.getElementById('userChoicePutLargerScreen').innerHTML="<img src='imgs/scissors.png'>";
      document.getElementById('userChoicePutSmallerScreen').innerHTML="<img src='imgs/scissors.png'>";
  } else if (userChoice==='paper') {
      document.getElementById('userChoicePutLargerScreen').innerHTML="<img src='imgs/paper.png'>";
      document.getElementById('userChoicePutSmallerScreen').innerHTML="<img src='imgs/paper.png'>";
  } 
}

function showComputerChoice(computerChoice) {
      if (computerChoice==='rock') {
        document.getElementById('computerChoicePutLargerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
        document.getElementById('computerChoicePutSmallerScreen').innerHTML= "<img src='imgs/pngegg.png'>";
    } else if(computerChoice==='scissors') {
        document.getElementById('computerChoicePutLargerScreen').innerHTML="<img src='imgs/scissors.png'>";
        document.getElementById('computerChoicePutSmallerScreen').innerHTML="<img src='imgs/scissors.png'>";
    } else if (computerChoice==='paper') {
        document.getElementById('computerChoicePutLargerScreen').innerHTML="<img src='imgs/paper.png'>";
        document.getElementById('computerChoicePutSmallerScreen').innerHTML="<img src='imgs/paper.png'>";
    }
}



function determineWinner(userChoice, computerChoice) {

  if (userChoice==='rock') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML=`${submitUserName} WINS!!!`;
      return 'user wins';
    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML=`${submitUserName} WINS!!!`;
      return 'user wins';
    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';
      return 'tie';
    } 
  }

  if (userChoice==='paper') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';
      return 'tie';
    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML=`${submitUserName} WINS!!!`;
      return 'user wins';
    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML='Computer wins!';
      return 'computer wins';
    }
  }

  if (userChoice==='scissors') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML=`${submitUserName} WINS!!!`;
      return 'user wins';
    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML='Computer wins!';
      return 'computer wins';
    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';
      return 'tie';
    }
  }

}

function playGame(userChoice) {
  const computerChoice=getComputerChoice();

  showUserChoice(userChoice);
  showComputerChoice(computerChoice);
 

  // console.log(determineWinner(userChoice, computerChoice));
}

playGame();

//showing and updating score


// function showDetermineWinner(userScore, computerScore) {
  
 

// }

