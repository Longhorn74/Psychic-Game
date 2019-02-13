//array of letter choices
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//variables for wins, losses, guesses left
var wins=0;
var losses=0;
var guessesLeft=9;
var lettersGuessed=[];
var secretLetter=[];


//random selection of letter to guess
window.onload=function() {
	var randomLetter=letters[Math.floor(Math.random()*letters.length)];
	secretLetter.push(randomLetter);
	console.log(secretLetter[0]);
}

//main logic
document.onkeyup=function(event) {
	var playerGuess=event.key;
	lettersGuessed.push(playerGuess);
	console.log(secretLetter[0]);

	if ((playerGuess===secretLetter[0]) && (guessesLeft > 0)) {
		wins++;
		guessesLeft=9;
		lettersGuessed.length=0;
		secretLetter.length=0;
		var randomLetter=letters[Math.floor(Math.random()*letters.length)];
		secretLetter.push(randomLetter);
		console.log(secretLetter[0]);
	}

	else if ((playerGuess!==secretLetter[0]) && (guessesLeft > 0)) {
		guessesLeft=guessesLeft-1;
	}

	else {
		losses++;
		guessesLeft=9;
		lettersGuessed.length=0;
		secretLetter.length=0;
		var randomLetter=letters[Math.floor(Math.random()*letters.length)];
		secretLetter.push(randomLetter);
		console.log(secretLetter[0]);
	}

	var update = "<p>Guess what letter I'm thinking of</p>" +
				"<p>Wins: " + wins + "</p>" +
				"<p>Losses: " + losses + "</p>" +
				"<p>Guesses Left: " + guessesLeft + "</p>" +
				"<p>Your guesses so far: " + lettersGuessed + "</p>";
	
	document.querySelector("#game").innerHTML=update;

}