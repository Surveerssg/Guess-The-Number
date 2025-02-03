let randomNumber=parseInt(Math.random()*100+1); //generates random number
const submit=document.querySelector('#subt'); //event listener will be applied on this
const prevGuess=document.querySelector('.guesses'); //to show previous guesses
const remaining=document.querySelector('.lastResult'); //to show remaining number of guesses
const userInput=document.querySelector('#guessField'); //to accept input from user
const finalMessage = document.querySelector('.message'); //to display final message
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p');

let numGuess=1; 
//Number of guesses made by user

let playGame=true; //Game will only proceed if this is true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess); //First we have to check if the guess is valid or not
    }
);
};

function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a valid number');
}
else if(guess<1){
    alert('Please enter a number more than 1')
}
else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } 
  //If number is valid
  else{
  if(numGuess===11){
    displayMessage(`Game Over! Random Number was ${randomNumber}`);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
}

function checkGuess(guess){
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();}
    else if (guess < randomNumber) {
    displayMessage(`Number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prevGuess.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  finalMessage.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value;
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; //We will use this button again in new game function
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1); //new random number generated
    numGuess=1;
    prevGuess.innerHTML='';
    remaining.innerHTML = `${11 - numGuess} `;

    userInput.removeAttribute('disabled'); //After new game button has been clicked we have to re-enable the input
    startOver.removeChild(p); //and remove the new game message

    playGame = true;
  })
}