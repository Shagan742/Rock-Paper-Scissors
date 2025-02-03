// username login 
let userName =''

function submitUserName() {
  //takes whatever user typed in
  userName = document.getElementById('userName').value;

  //if user put something in, website calls them whatever they put in. if not, theyre a stranger
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


//once user clicks a thing, the placeholder puts the image of whatever user chose.
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


//scores and rounds are initially 0
let userScore=document.getElementById('userScore').innerHTML=0;
let computerScore=document.getElementById('computerScore').innerHTML=0;
let roundsWonUser=document.getElementById('roundsWonUser').innerHTML=0;
let roundsWonComputer=document.getElementById('roundsWonComputer').innerHTML=0;

function determineWinner(userChoice, computerChoice) {

  if (userChoice==='rock') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML='YOU WIN!!!';
      userScore++
      document.getElementById('userScore').innerText = userScore;

    } else if (computerChoice==='scissors') {
      document.getElementById('winLoseTieThing').innerHTML='YOU WIN!!!';
      userScore++
      document.getElementById('userScore').innerText = userScore;

    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';
    } 
  }


  //whoever wins get +1 score
  if (userChoice==='paper') {
    if (computerChoice==='paper') {
      document.getElementById('winLoseTieThing').innerHTML='TIE!';

    } else if (computerChoice==='rock') {
      document.getElementById('winLoseTieThing').innerHTML='YOU WIN!!!';
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
      document.getElementById('winLoseTieThing').innerHTML='YOU WIN!!!';
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



// score reaches max of 5, whoever gets there first wins the round. max rounds are 5. 
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
    document.getElementById('winLoseTieThing').innerHTML='<h4 class="finalDeclaration">CONGRATS!!!! YOU WON ALL 5 ROUNDS</h4>';
  } else if (roundsWonComputer>=5 && roundsWonUser<5) {
    document.getElementById('winLoseTieThing').innerHTML='<h4 class="finalDeclaration">Computer won, too bad...</h4>';
  }

}

//once reset game button's clicked, placeholder that holds whatever user or computer chooses empties, scores and rounds turn to 0.
function resetGame() {
  userScore=document.getElementById('userScore').innerHTML=0;
  computerScore=document.getElementById('computerScore').innerHTML=0;

 document.getElementById('userChoicePutSmallerScreen').innerHTML=' ';
  document.getElementById('userChoicePutLargerScreen').innerHTML=' ';
  document.getElementById('computerChoicePutSmallerScreen').innerHTML=' ';
  document.getElementById('computerChoicePutLargerScreen').innerHTML=' ';
  document.getElementById('winLoseTieThing').innerHTML=' ';
}



//game works and is rready to play
function playGame(userChoice) {
  const computerChoice=getComputerChoice();

  showUserChoice(userChoice);
  showComputerChoice(computerChoice);
 

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


