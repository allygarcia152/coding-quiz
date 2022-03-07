var timerEl = document.getElementById("timer");
var questionDisplayEl = document.getElementById("questions");
var startBtn = document.getElementById("start-btn");

var choiceA =document.createElement("button");
var choiceB = document.createElement("button");
choiceA.textContent = "TRUE";
choiceB.textContent = "False";
choiceA.className = "btn btn-success";
choiceB.className = "btn btn-danger";

//list of quiz questions
var questionOne = {
  question: "True or false: The DOM is build into the JavaScript language.",
  choiceA: "True",
  choiceB: "False",
};
var questionTwo = {
  question: "True or false: Arrays in JaveScript can be used to store booleans.",
  choiceA: "True",
  choiceB: "False",
};
var questionThree = {
  question: "True or false: Commonly used data types include alerts.",
  choiceA: "True",
  choiceB: "False",
};
var questionFour = {
  question: "True or false: Bootstrap can be used to create modals.",
  choiceA: "True",
  choiceB: "False",
};
var questionFive = {
  question: "True or false: In the DOM's event object, the target property refers to the HTML element that was interected with to dispach the event.",
  choiceA: "True",
  choiceB: "False",
};

//timer
function countdown(){
  var timeLeft = 60;
  var timeInterval = setInterval(function(){
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    if (timeLeft <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Time: 0"
      // when time is up game is over
      endGame();
    }
  }, 1000);
  console.log(timeLeft)
};

// when the start quiz button is clicked, player sees first question
startBtn.addEventListener("click", function(){
  // timer begins when start quiz button is clicked
  countdown();
  showQuestions();
});

function showQuestions (){
  //for loop for length of array of questions 
  for (var i=0; i<5; i++) {
    questionDisplayEl.textContent = questionOne.question.choiceA.choiceB;
  }
  // if answer is wrong, time is taken from time
}

//if all questions are answered game is over
// when game is over, player enters initials and saves score - score is amount of time left
 function endGame(){
   if (timeLeft = 0) {

  }
  
 }

//OPTIONAL can view high scores

//OPTIONAL can replay game after saving score at the end

//OPTIONAL  when player gets quesiton wrong, the screen will let the player know