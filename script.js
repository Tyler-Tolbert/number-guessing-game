'use strict';

// selects the random secret number from 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// shows number for testing purposes
// document.querySelector('.number').textContent = secretNumber;


// event handeler function (game logic)
document.querySelector('.check').addEventListener('click', function () {
  // changes it to a number
  const guess = Number(document.querySelector('.guess').value);
  // adding guess to the console and showing the type.
  // console.log(guess, typeof guess); 

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!'; // this shows the message
    displayMessage('⛔️ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // shows the random number after correct answer; 
    document.querySelector('.number').textContent = secretNumber;
    // setting the color // it needs to be a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // checks if its too high or too low
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } 
});


document.querySelector('.again').addEventListener('click', function() { // This resets the game
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});