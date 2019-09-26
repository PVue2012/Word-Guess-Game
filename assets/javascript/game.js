var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var guessedLetters = []; //array for guess letters
var letterToGuess = null; //letters to guess set to null/nothing
var guessesLeft = 9; // Used for couting mistakes

var Wins = 0;
var Losses = 0;

// creating 3 functions
var updateGuessesLeft = function() {
  document.querySelector("#GuessesL").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector("#GuessedL").innerHTML = guessedLetters.join(", ");
};

//Reset to start games and functions
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
  guessesLeft--; //reduce guess --

  // handles to lowercase letter
  var letter = event.key.toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();

//condition catching
  if (letter === letterToGuess) {

    Wins++;
    document.querySelector("#Wins").innerHTML = Wins;

    // Then we'll reset the game
    reset();
  }

  if (guessesLeft === 0) {
    Losses++;
    document.querySelector("#Losses").innerHTML = Losses;

    // Resey here if condition is met
    reset();
  }
};