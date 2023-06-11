'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
document.querySelector('.number').textContent = secretNumber;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
    console.log(!guess);

    // when player won!!
  } else if (guess === secretNumber) {
    if (Highscore < score) {
      Highscore = score;
      document.querySelector('.highscore').textContent = Highscore;
    }

    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when player guess higher no..
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'select the lower no..';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game !';
      document.querySelector('.score').textContent = 0;
    }

    // when player guess lower no..
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'select the higher no..';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
