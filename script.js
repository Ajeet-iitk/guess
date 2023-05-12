document.getElementById("guessButton").addEventListener("click", function() {
    var userInput = parseInt(document.getElementById("guess").value);
  
    var randomNumber = userInput; // Use the user's input as the randomly generated number
  
    var messageElement = document.getElementById("message");
    if (userInput === randomNumber) {
      messageElement.innerHTML = "Congratulations! You guessed it right! The number was " + randomNumber + ". You're a mind reader!";
    } else {
      var funnyMessages = [
        "Oops! Wrong guess. But don't worry, even Einstein would have had trouble with this one.",
        "Nice try, but nope. The number was " + randomNumber + ". Keep guessing!",
        "Oh no! Wrong guess. The magical number was " + randomNumber + ". You'll get it next time!"
      ];
      var randomIndex = Math.floor(Math.random() * funnyMessages.length);
      messageElement.innerHTML = funnyMessages[randomIndex];
    }
  });
  