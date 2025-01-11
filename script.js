// user options

function choiceClicked() {
 
const container=document.getElementById('userChoicePutSmallerScreen');
const containerTwo=document.getElementById('userChoicePutLargerScreen');
let htmlImage='';

if(document.activeElement.id==='choice1') {
  htmlImage='<img src="imgs/pngegg.png">';
} else if (document.activeElement.id==='choice2') {
  htmlImage='<img src="imgs/paper.png">';
} else {
  htmlImage='<img src="imgs/scissors.png">';
}

container.innerHTML=htmlImage;

if(document.activeElement.id==='choice1') {
  htmlImage='<img src="imgs/pngegg.png">';
  

} else if (document.activeElement.id==='choice2') {
  htmlImage='<img src="imgs/paper.png">';


} else {
  htmlImage='<img src="imgs/scissors.png">';


}

containerTwo.innerHTML=htmlImage;

}

function genComputerChoice() {

  const computerChoiceContainer=document.getElementById('computerChoicePutSmallerScreen');
  const randomNumber=Math.floor(Math.random()*3);

  const computerChoiceContainerTwo=document.getElementById('computerChoicePutLargerScreen');

  if(randomNumber===0) {
    computerChoiceContainer.innerHTML='<img src="imgs/pngegg.png">';
  } else if (randomNumber===1) {
    computerChoiceContainer.innerHTML='<img src="imgs/scissors.png">';
  } else {
    computerChoiceContainer.innerHTML='<img src="imgs/paper.png">';
  }

  if(randomNumber===0) {
    computerChoiceContainerTwo.innerHTML='<img src="imgs/pngegg.png">';
  } else if (randomNumber===1) {
    computerChoiceContainerTwo.innerHTML='<img src="imgs/scissors.png">';
  } else {
    computerChoiceContainerTwo.innerHTML='<img src="imgs/paper.png">';
  }

}

































































//codeacademy code that i dont know wtf its saying
const getUserChoice = (userInput) => {
  userInput=userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors') {
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
}

function playGame() {
  const userChoice=getUserChoice('rock');
  const computerChoice=getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
