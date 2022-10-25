var header = document.querySelector(".header");

var quizQuestionsPage = document.getElementById("quizPage");
var quizQuestionHeader = document.getElementById("questionHeader");
var quizChallengePage = document.getElementById("questionsPage");
var finalScorePage = document.getElementById("finalScorePage");

var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");

var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answer");
var score = document.getElementById("score");
var finalScoreIs = document.getElementById("finalScore");

var questionButton = document.querySelector(".questionButton");
var submitButton = document.getElementById("submitButton");
var highScoreButtons = document.getElementById("highScoreButtons");

var initials = document.getElementById("initials"); 
var initialButton = document.getElementById("initialButton"); 
var initialInput = document.getElementById("initialInput"); 

var allDone = document.getElementById("finished");
var allDoneButtons = document.getElementById("form-inline");

var timer = document.getElementById("timer");

var quizQuestions = [
    {
    "questionHeader" : "Commonly used Data Types do NOT Include:", 
    "one" : "1. strings",
    "two" : "2. booleans",
    "three" : "3. alerts",
    "four" : "4. numbers",
    "correct" : "3. alerts",
    },{
    "questionHeader" : "The condition in an if / else statement is enclosed within ________.",
    "one" : "1. quotes",
    "two" : "2. curly brackets",
    "three" : "3. parenthesis",
    "four" : "4. square brackets",
    "correct" : "3. parenthesis",
    },{
    "questionHeader" : "Arrays in JavaScript can be used to store ________.",
    "one" : "1. numbers and strings",
    "two" : "2. other arrays",
    "three" : "3. booleans",
    "four" : "4. all of the above",
    "correct" : "4. all of the above",
    },{
     "questionHeader" : "String values must be enclosed within ________ when being assigned to variables",
     "one" : "1. commas",
     "two" : "2. curly brackets",
     "three" : "3. quotes",
     "four" : "4. parenthesis",
     "correct" : "3. quotes",
    },{
     "questionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
     "one" : "1. JavaScript",
     "two" : "2. terminal / bash",
     "three" : "3. for loops",
     "four" : "4. console.log",
     "correct" : "4. console.log",
    },
  ]
  

