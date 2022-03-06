var timerEl = $("#timer")
//Array of questions to choose from

//timer
function countdown(){
  var timeLeft = 60;
  var timeInterval = setInterval(function(){
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    if (timeLeft <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Time: 0"
      endGame();
    }
  }, 1000);
  console.log(timeLeft)
};

// when the start quiz button is clicked, player sees first question

// timer begins when start quiz button is clicked

// when question is answered, next question is given

// if answer is wrong, time is taken from timer

// when time is up OR when all questions are answered game is over

// when game is over, player enters initials and saves score

//OPTIONAL can view high scores

//OPTIONAL can replay game after saving score at the end

//OPTIONAL  when player gets quesiton wrong, the screen will let the player know 