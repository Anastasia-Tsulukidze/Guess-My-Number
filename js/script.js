'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
//this will select a random number between 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  messageText.textContent = message;
};
const number = document.querySelector('.number');
const guessNum = document.querySelector('.guess');
const again = document.querySelector('.again');
const labelHighScore = document.querySelector('.label-highscore');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const heading = document.querySelector('h1');
const between = document.querySelector('.between');
const messageText = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');
//this will select check button on click and sees if number is written, and converts it to number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //this will check if the number is written
  if (!guess) {
    displayMessage('No number!');
    //if player wins the game
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    body.style.backgroundColor = '#ffdac7';
    number.style.width = '25rem';
    check.style.backgroundColor = '#eb6424';
    again.style.backgroundColor = '#eb6424';
    number.style.backgroundColor = '#fa9500';
    heading.style.color = '#222';
    between.style.color = '#222';
    messageText.style.color = '#222';
    labelHighScore.style.color = '#222';
    labelScore.style.color = '#222';
    guessNum.style.borderColor = '#222';
    guessNum.style.color = '#222';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost the game!');
      scoreText.textContent = 0;
    }
  }
});
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  scoreText.textContent = score;
  number.textContent = '?';
  guessNum.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  again.style.backgroundColor = '#541c94';
  check.style.backgroundColor = '#541c94';
  heading.style.color = '#ccc';
  between.style.color = '#ccc';
  guessNum.style.borderColor = '#ccc';
  messageText.style.color = '#ccc';
  labelHighScore.style.color = '#ccc';
  labelScore.style.color = '#ccc';
  number.style.backgroundColor = '#ccc';
  guessNum.style.color = '#ccc';
});
