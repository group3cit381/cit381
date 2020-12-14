//List of defined variables
let userScore= 0;
let pcScore= 0;
const userScore_span= document.getElementById('user_score'); //Receives and stores the element
const pcScore_span= document.getElementById('pc_score');
const scoreBoard_div= document.querySelector('score');
const result_div= document.querySelector('.result p');
const rock_div= document.getElementById('rock');
const paper_div= document.getElementById('paper');
const scissors_div= document.getElementById('scissors');


//Function that contains an array with the options and returns a random option between 3 objects
function playersChoices(){
  const options= ['rock','paper','scissors'];
  const random= Math.floor(Math.random() * 3);
  const choices= options[random];
  return (choices); //It returns the variable
}

//This function returns an image acoording to the element selected.
function convertWord(option){
  if (option == 'rock'){
    return "Rock ✊";
  }else if (option == 'paper') {
    return "Paper 🤚";
  }else {
    return "Scissors ✌";
  }
}

//Function that announces if the user or the PC wins the move and increases its declared counter in the first lines
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

//Function that announces if the user or the PC lose the move and increases its declared counter in the first lines
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

//Function that announces if the user or the PC choose the same option
function tie(optionUser){
  result_div.innerHTML= "You both chose "+convertWord(optionUser)+"<br> It's a tie!!!";
  const option_div= document.getElementById(optionUser);
  option_div.classList.add('gray');
  setTimeout(function(){
    option_div.classList.remove("gray");
  }, 2000); 
}


//Function that receives the chosen options and compares it with the established cases to define which choice wins, loses or is a tie
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

//Function that is executed when selecting an element with click.
function main(){
  rock_div.addEventListener('click', () => game("rock"));
  paper_div.addEventListener('click', () => game("paper"));
  scissors_div.addEventListener('click', () => game("scissors"));
}
main();
