var letters = ["a","b","c","d", "e", "f","g","h","i","j","k","l","m","n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed =[];
var remainingGuesses =[];
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var lettersGuessedText = document.getElementById("letters-guessed");

//choses a random string from letters array to be the computer's choice

var computerGuess = letters [Math.floor(Math.random()* letters.length)];
console.log (computerGuess);
var userGuess = userKeyEntry

// listens for a key input and determines wins/losses

document.onkeypress = function(event) {
userGuess = event.key;
if ((userKeyEntry == computerGuess)) {
    alert ("You Won!");
    wins++;
    computerGuess;
}

else {
    guessesLeft--;
    lettersGuessed.push(userGuess);

}

//resets guess & loss numbers

if ((guessesLeft == 0)) {
    alert ("You Lost! :(");
    remainingGuesses=10;
    lettersGuessed = [];
    losses++;

}}