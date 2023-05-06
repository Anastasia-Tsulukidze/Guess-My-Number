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
  document.querySelector('.message').textContent = message;
};
//this will select check button on click and sees if number is written, and converts it to number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //this will check if the number is written
  if (!guess) {
    displayMessage('No number!');
    //if player wins the game
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#ffdac7';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.backgroundColor = '#eb6424';
    document.querySelector('.again').style.backgroundColor = '#eb6424';
    document.querySelector('.number').style.backgroundColor = '#fa9500';
    document.querySelector('h1').style.color = '#222';
    document.querySelector('.between').style.color = '#222';
    document.querySelector('.message').style.color = '#222';
    document.querySelector('.label-highscore').style.color = '#222';
    document.querySelector('.label-score').style.color = '#222';
    document.querySelector('.guess').style.borderColor = '#222';
    document.querySelector('.guess').style.color = '#222';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.again').style.backgroundColor = '#541c94';
  document.querySelector('.check').style.backgroundColor = '#541c94';
  document.querySelector('h1').style.color = '#ccc';
  document.querySelector('.between').style.color = '#ccc';
  document.querySelector('.guess').style.borderColor = '#ccc';
  document.querySelector('.message').style.color = '#ccc';
  document.querySelector('.label-highscore').style.color = '#ccc';
  document.querySelector('.label-score').style.color = '#ccc';
  document.querySelector('.number').style.backgroundColor = '#ccc';
});
