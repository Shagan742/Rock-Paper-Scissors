// username login idk stuff
let userName =''

function submitUserName() {
  userName = document.getElementById('userName').value;
  if (userName) {
    document.getElementById('greeting').innerHTML=`Hello ${userName}!`;
    document.getElementById('userNameScore').textContent=`${userName}:`;
  } else {
    document.getElementById('greeting').innerHTML='Hello stranger!';
    document.getElementById('userNameScore').textContent='User:';
  }
}


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

let userScore=document.getElementById('userScore').innerHTML=0;
let computerScore=document.getElementById('computerScore').innerHTML=0;

function determineWinner(userChoice, computerChoice) {

  if (userChoice==='rock') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML=`${userName} WINS!!!`;
      userScore++
      document.getElementById('userScore').innerText = userScore;

    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML=`${userName} WINS!!!`;
      userScore++
      document.getElementById('userScore').innerText = userScore;

    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';
    } 
  }

  if (userChoice==='paper') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';

    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML=`${userName} WINS!!!`;
      userScore++
      document.getElementById('userScore').innerText = userScore;

    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML='Computer wins!';
      computerScore++
      document.getElementById('computerScore').innerText = computerScore;

    }
  }

  if (userChoice==='scissors') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML=`${userName} WINS!!!`;
      userScore++
      document.getElementById('userScore').innerText = userScore;

    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML='Computer wins!';
      computerScore++
      document.getElementById('computerScore').innerText = computerScore;


    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';
    }
  }


}




function roundsWon(userScore, computerScore) {
  let roundsWonUser=document.getElementById('roundsWonUser').innerHTML=0;
  let roundsWonComputer=document.getElementById('roundsWonComputer').innerHTML=0;

  if(userScore>=5 && computerScore<5) {
    roundsWonUser++
    document.getElementById('roundsWonUser').innerText=roundsWonUser;

  } else if (userScore<5 && computerScore>=5) {
    roundsWonComputer++
    document.getElementById('roundsWonComputer').innerText=roundsWonComputer;
  } else if (userScore===5 && computerScore===5) {
    document.getElementById('resetButton').innerText='Reset';

    roundsWonComputer++
    document.getElementById('roundsWonComputer').innerText=roundsWonComputer;

    roundsWonUser++
    document.getElementById('roundsWonUser').innerText=roundsWonUser;
  } 
}

roundsWon();


function playGame(userChoice) {
  const computerChoice=getComputerChoice();

  showUserChoice(userChoice);
  showComputerChoice(computerChoice);
 

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


