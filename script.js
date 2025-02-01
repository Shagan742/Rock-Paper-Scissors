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
let roundsWonUser=document.getElementById('roundsWonUser').innerHTML=0;
let roundsWonComputer=document.getElementById('roundsWonComputer').innerHTML=0;

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




  if(userScore===5 && computerScore<5 && userScore>computerScore) {
    roundsWonUser++
    document.getElementById('roundsWonUser').innerText=roundsWonUser;
    document.getElementById('thisStoresResetButton').innerHTML='<div id="resetButton" class="btn d-flex justify-content-center mb-3" onclick="resetGame()">Reset</div>';

  } else if (userScore<5 && computerScore===5 && userScore<computerScore) {
    roundsWonComputer++
    document.getElementById('thisStoresResetButton').innerHTML='<div id="resetButton" class="btn d-flex justify-content-center mb-3" onclick="resetGame()">Reset</div>';
    document.getElementById('roundsWonComputer').innerText=roundsWonComputer;
  } 

  if(roundsWonUser>=5 && roundsWonComputer<5) {
    document.getElementById('finalDeclareWinner').innerHTML='<h3>CONGRATS!!!!</h3>';
  } else if (roundsWonComputer>=5 && roundsWonUser<5) {
    document.getElementById('finalDeclareWinner').innerHTML='<h3>Computer won, too bad...</h3>';
  }

}


function resetGame() {
  userScore=document.getElementById('userScore').innerHTML=0;
  computerScore=document.getElementById('computerScore').innerHTML=0;

 document.getElementById('userChoicePutSmallerScreen').innerHTML=' ';
  document.getElementById('userChoicePutLargerScreen').innerHTML=' ';
  document.getElementById('computerChoicePutSmallerScreen').innerHTML=' ';
  document.getElementById('computerChoicePutLargerScreen').innerHTML=' ';
  document.getElementById('winLoseTieThing').innerHTML=' ';
}




function playGame(userChoice) {
  const computerChoice=getComputerChoice();

  showUserChoice(userChoice);
  showComputerChoice(computerChoice);
 

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


