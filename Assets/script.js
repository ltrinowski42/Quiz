var viewHighScores = document.querySelector("view-high-scores");
var timerEl = document.querySelector("#timer");
var startingPageContainer = document.getElementById("starting-page");
var startQuizButton = document.querySelect("#start-quiz");
var questionsPageContainer = document.getElementById("questions-page");
var answerButton = document.getElementById("answer-button");
var allDonePageContainer = document.getElementById("all-done-page");
var highScorePageContainer = document.getElementById("high-score-page");
var highScoreList = document.getElementById("high-score-list");
var initialsForm = document.getElementById("initials-form");
var submitButton = document.querySelector("#submit");
var goBackButton = document.querySelector("#go-back");
var clearScoresButton = document.querySelector("#clear-high-scores");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

var questionsArray = [
    [
    'Commonly used data types DO NOT include:','strings','booleans','alerts','numbers','3'
    ],[
    'The condition in an if / else statement is enclosed within ______.', 'quotes', 'curly braces', 'parentheses', 'square brackets', '3'
    ],[
    'Arrays in JavaScript can be used to store ______.', 'numbers and strings', 'other arrays', 'booleans', 'all of the above', '4'
    ],[
    'String values must be enclosed with _______ when being assinged to variables', 'commas', 'curly braces', 'quotes', 'parentheses', '3'
    ],[
    'A very useful tool used during development and debugging for printing content to the debugger is:', 'JavaScript', 'terminal/bash', 'for loops', 'console.log', '4'],
];

function startQuiz() { 
    startingPageContainer.classList.add('hide');
    startingPageContainer.classList.remove('show');
    questionsPageContainer.classList.remove('hide');
    questionsPageContainer.classList.add('show');








startQuizButton.addEventListener("click", startChallenge)
initialsForm.addEventListener("submit", createHighScore)
goBackButton.addEventListener("click", renderStartPage)
clearScoreButton.addEventListener("click", clearScores)