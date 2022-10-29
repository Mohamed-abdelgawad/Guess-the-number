'use strict';
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // When there's no input
    if (!guess) {
        displayMessage("please add a number 😁")

        // when the player wins
    } else if (guess === secertNumber) {
        displayMessage("👍👍 Correct Number🎉🎉")
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector('.number').textContent = secertNumber;
        if (score > heighScore) {
            heighScore = score;
            document.querySelector('.highscore').textContent = heighScore;
        }

        // When guess is wrong 
    } else if (guess !== secertNumber) {
        if (score > 1) {
            displayMessage(guess > secertNumber ? 'A little bit heighr! try again📈' :
            "It's too low!📉 another try you're about");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lost The Game 😒😒");
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "#d90429";
        }
    }
});
// Reset the game
    document.querySelector(".again").addEventListener("click", function () {
        score = 20;
        secertNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('.number').style.width = "15rem";
    })