let userScore= 0;
let pcScore= 0;
const userScore_span= document.getElementById('user_score');
const pcScore_span= document.getElementById('pc_score');
const scoreBoard_div= document.querySelector('score');
const result_div= document.querySelector('.result p');
const rock_div= document.getElementById('rock');
const paper_div= document.getElementById('paper');
const scissors_div= document.getElementById('scissors');

function playersChoices(){
  const options= ['rock','paper','scissors'];
  const random= Math.floor(Math.random() * 3);
  const choices= options[random];
  return (choices);
}
function convertWord(option){
  if (option == 'rock'){
    return "Rock ✊";
  }else if (option == 'paper') {
    return "Paper 🤚";
  }else {
    return "Scissors ✌";
  }
}

function toWin(optionUser, optionPc){
  userScore++;
  userScore_span.innerHTML= userScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertWord(optionUser)+smallUser+" wins to "+convertWord(optionPc)+smallPc+"<br> You won!!!";
  const userChoice_div= document.getElementById(optionUser);
  const pcChoice_div= document.getElementById(optionPc);
  userChoice_div.classList.add('green');
  pcChoice_div.classList.add('red');
  setTimeout(function(){
    userChoice_div.classList.remove("green");
    pcChoice_div.classList.remove("red");
  }, 2000);
}

function toLose(optionUser, optionPc){
  pcScore++;
  pcScore_span.innerHTML= pcScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertWord(optionPc)+smallPc+" wins to "+convertWord(optionUser)+smallUser+"<br> You lost!!!";
  const userChoice_div= document.getElementById(optionUser);
  const pcChoice_div= document.getElementById(optionPc);
  userChoice_div.classList.add('red');
  pcChoice_div.classList.add('green');
  setTimeout(function(){
    userChoice_div.classList.remove("red");
    pcChoice_div.classList.remove("green");
  }, 2000);
}

function tie(optionUser){
  result_div.innerHTML= "You both chose "+convertWord(optionUser)+"<br> It's a tie!!!";
  const option_div= document.getElementById(optionUser);
  option_div.classList.add('gray');
  setTimeout(function(){
    option_div.classList.remove("gray");
  }, 2000);
}

function game(option){
  const pcChoice= playersChoices();
  const userChoice= option;
  switch (userChoice+pcChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      toWin(userChoice, pcChoice);
    break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      toLose(userChoice, pcChoice);
    break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      tie(userChoice);
    break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("rock"));
  paper_div.addEventListener('click', () => game("paper"));
  scissors_div.addEventListener('click', () => game("scissors"));
}
main();