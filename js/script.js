
// color variables
var bgdLight = "#7e307e";
var bgdLDark = "#800080";

// Question and Answer array
var questions = [{
    question: "Commonly used data types DO NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 2
}, {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: 3
}, {
    question: "A Very useful tool used during development and debugging for printing content to debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: 3
}, {
    question: "The Condition in an if / else statement is enclosed in _____.",
    choices: ["qoutes", "curly brackets", "parantheses", "square brackets"],
    answer: 2
}];

// global variables
var currentQuestion = 0;
var correctAnswers = 0;
var answeredFlag = false;
var quizOverFlag = false;
var correctFlag = false;
var wrongFlag = false;
// variable to define page to show
// 0 as start page
// 1 as quiz page
// 2 as result page
// 3 as score page
var page = 0;
// variable to define quiz time
var timeLeft = 40;
var timePause =2;
// an arry of initials
var initials = [];
// high scores Array
var high_scores =[];
var scoreListLength = 0;
// define body of document
var body = document.body;
// define nav bar
var navBar = document.createElement("nav");
// link to higest score
var showScore = document.createElement("div");
// show remaining time
var showTime = document.createElement("div");
// use h1 to show questions, high scores, game start
var h1El = document.createElement("h1");
// use div for answer sections
var Answers = document.createElement("div");
// ordered list for answers
var listEl = document.createElement("ol");
//using li elements for each answer
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// using span to control background around answers
var span1 = document.createElement("span");
var span2 = document.createElement("span");
var span3 = document.createElement("span");
var span4 = document.createElement("span");

// variable to show result
var horzLine = document.createElement("hr");
var result = document.createElement("div");

// variables to show start screen Message and Start Quiz button
var startMessage = document.createElement("div");
var startButton = document.createElement("div");
var spanStart = document.createElement("span");

// variables to show and get initials for high score
var addInitial = document.createElement("div");
var initialLabel = document.createElement("span");
var initialInput = document.createElement("input");
var initialButton = document.createElement("span");
var initialList = document.createElement("ol");
var initialListItem = document.createElement("li");

// variables in High Score screen for clear and return buttons
var scoreButtons = document.createElement("div");
var clearButton = document.createElement("span");
var returnButton = document.createElement("span");

// var for dynamic list for scores 
var scoreSection = document.createElement("div");
var scorelistEl = document.createElement("ol");


// creating elements
body.appendChild(navBar);
navBar.appendChild(showScore);
navBar.appendChild(showTime);
body.appendChild(h1El);
body.appendChild(Answers);
Answers.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.appendChild(span1);
li2.appendChild(span2);
li3.appendChild(span3);
li4.appendChild(span4);

// div to show result; initiall hidden
body.appendChild(horzLine);
body.appendChild(result);
result.setAttribute("id", "displayResults");

// div and span to show start quiz button
body.appendChild(startMessage);
body.appendChild(startButton);
body.appendChild(spanStart);

// div and span to add initials
body.appendChild(addInitial);
addInitial.appendChild(initialLabel);
addInitial.appendChild(initialInput);
addInitial.appendChild(initialButton);

// high score page buttons
body.appendChild(scoreSection);
body.appendChild(scoreButtons);
scoreButtons.appendChild(returnButton);
scoreButtons.appendChild(clearButton);


// set attributes
navBar.setAttribute("style", "margin: auto; margin-top: 1em; width: 100%; text-align: left;");
showScore.setAttribute("style", "margin: auto; margin-top: 1em; width: 100%; text-align: left;");
showTime.setAttribute("style", "margin: auto; margin-top: 1em; width: 100%; text-align: left;");
h1El.setAttribute("style", "margin: auto; margin-top: 10%; width: 50%; text-align: left;");
Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
li1.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
li2.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
li3.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
li4.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
result.setAttribute("style", "color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
startButton.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
spanStart.setAttribute("style", "width: 20%; text-align: center; margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");

span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
span1.setAttribute("class", "button questions");
span2.setAttribute("class", "button questions");
span3.setAttribute("class", "button questions");
span4.setAttribute("class", "button questions");

startMessage.setAttribute("style", "margin: auto; width: 50%; text-align: center; font-size: 20px");
startButton.setAttribute("style", "margin-top: 3em; line-height: 1.2em;");
spanStart.setAttribute("class", "button");
spanStart.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #7e307e;");
// addInitial.setAttribute("style", "margin: auto; width: 50%; text-align: center; font-size: 20px");
// initialButton.setAttribute("style", "margin-left: 1em;  padding: .5em; width: 20%; border-radius: .3em; background-color: #7e307e;");  
addInitial.setAttribute("style", "display: none;");
initialButton.setAttribute("style", "display: none;");  
initialButton.setAttribute("class", "button");


// mouse event hover over answers to change back ground volor
span1.addEventListener("mouseover", event =>{
    span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em;");
    // console.log("Span1");
});

span1.addEventListener("mouseout", event =>{
    span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
});

span2.addEventListener("mouseover", event =>{
    span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
});

span2.addEventListener("mouseout", event =>{
    span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
});

span3.addEventListener("mouseover", event =>{
    span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
});

span3.addEventListener("mouseout", event =>{
        span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
});

span4.addEventListener("mouseover", event =>{
        span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
});

span4.addEventListener("mouseout", event =>{
        span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
});

// hover over Start Quiz button
spanStart.addEventListener("mouseover", event =>{
    // span1.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #800080");
    // span1.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; border-radius: .3em; background-color: #800080");
});

spanStart.addEventListener("mouseout", event =>{
    // span1.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #7e307e;");
    // span1.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; border-radius: .3em; background-color: #7e307e;");
});


span1.addEventListener("click", event => {
    if(questions[currentQuestion].answer == 0){
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Correct";
        correctAnswers++;
        correctFlag = true;
    } else {
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Wrong";
        timeLeft = timeLeft - 10;
        wrongFlag = true;
    }
    
    result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");

    stopTimer();
});

span2.addEventListener("click", event => {
    if(questions[currentQuestion].answer == 1){
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Correct";
        correctAnswers++;
        correctFlag = true;
    } else {
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Wrong";
        wrongFlag = true;
        timeLeft = timeLeft - 10;
    }
    result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
    stopTimer();
});

span3.addEventListener("click", event => {
    if(questions[currentQuestion].answer == 2){
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Correct";
        correctAnswers++;
        correctFlag = true;
    } else {
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Wrong";
        wrongFlag = true;
        timeLeft = timeLeft - 10;
    }
    result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
    answeredFlag = true;
    stopTimer();
});

span4.addEventListener("click", event => {
    if(questions[currentQuestion].answer == 3){
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Correct";
        correctAnswers++;
        correctFlag = true;
    } else {
        horzLine.setAttribute("style", "color: gray; margin: auto; width: 50%;");
        result.textContent = "Wrong";
        timeLeft = timeLeft - 10;
        wrongFlag = true;
    }
    result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
    answeredFlag = true;
    stopTimer();
});

spanStart.addEventListener("click", event => {
    page = 1;
    Answers.setAttribute("style", "display: none;");
    spanStart.setAttribute("style", "display: none;");
    scoreSection.setAttribute("style", "display: none");
//    listEl.setAttribute("style", "display: none");
    scoreButtons.setAttribute("style", "display: none");
    returnButton.setAttribute("style", "display: none");
//    listEl.setAttribute("style", "display: none");
    Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
    span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; text-align: left; color: black; background-color: #7e307e;");
    span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    currentQuestion = 0;
    displayQuestion();
});


function initInitials() {
//    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    if (storedInitials != null) {
        initials = storedInitials;
    }
    renderInitials();
}

function renderInitials() {
    for (var i = 0; i < initials.length; i++) {
        var initial = initials[i];
        var li = document.createElement("li");
        li.textContent = initial;
        initialList.appendChild(li);
        console.log(initial);
    }
}

function storeInitials() {
    localStorage.setItem("initials", JSON.stringify(initials));
}

function highScores (){
    var initialText = initialInput.value.trim();
    if (initialText !== "") {
        var highScoreAr = JSON.parse(localStorage.getItem("highScores")) || [];
        var currentUserScore = {
            score: correctAnswers * 5,
            initials: initialText 
        }
        highScoreAr.push(currentUserScore);
        localStorage.setItem("highScores", JSON.stringify(highScoreAr));
    }    
    console.log(currentUserScore);
    displayScore();
}

initialButton.onclick = highScores;

function stopTimer() {
    var timeInterval = setInterval(function(){
        if (timePause> 1) {
            // if timer greater than 0 reduce timer
            timePause --;
        } else {
            // time passed reset timer and go to next question
            clearInterval(timeInterval)
            console.log("stop timer");
            if(currentQuestion == questions.length-1){
                timePause = 2;
                // showTime.setAttribute("style", "display: none");
                // quizOverFlag = true;
                 page = 2;
                 timeLeft = 0;
                displayResults()
            } else {
                currentQuestion++;
            }
            page = 1;
            displayQuestion();
        }
    },1000);
}



function runningTimer() {
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            // if timer greater than 0 reduce timer
            timeLeft --;
            message = "Time ";
            message = message.concat(timeLeft);
            showTime.textContent = message;
        } else {
            // time passed reset timer and show results
            clearInterval(timeInterval)
            page =2;
            displayResults();
        }
    },1000);
}


function displayQuestion() {
    showScore.textContent = "View Highscore";
    message = "Time ";
    message = message.concat(timeLeft);
    showTime.textContent = message;
    startMessage.setAttribute("style", "display: none;");
//   var listEl = document.createElement("ol");
    Answers.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.appendChild(span1);
    li2.appendChild(span2);
    li3.appendChild(span3);
    li4.appendChild(span4);
//    scoreSection.setAttribute("style", "display: none;");
    Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
    span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    startMessage.setAttribute("style", "display: none;");
    spanStart.setAttribute("style", "display: none;");


    h1El.textContent = questions[currentQuestion].question;   
    span1.textContent = questions[currentQuestion].choices[0];
    span2.textContent = questions[currentQuestion].choices[1];
    span3.textContent = questions[currentQuestion].choices[2];
    span4.textContent = questions[currentQuestion].choices[3];

    horzLine.setAttribute("style", "display: none;");
    result.setAttribute("style", "display: none;");
//    initialInput.textContent = "";
    runningTimer();
}

function displayResults() {
    horzLine.setAttribute("style", "display: none;");
    result.setAttribute("style", "display: none;");
    addInitial.setAttribute("style", "margin: auto; width: 50%; text-align: center; font-size: 20px");
    initialButton.setAttribute("style", "margin-left: 1em;  padding: .5em; width: 20%; border-radius: .3em; background-color: #7e307e;");  

    message = "All done!"
    h1El.textContent = message;
    message = "Your final score is:";
    message += correctAnswers * 5 + ".";
    Answers.textContent = message;
    initialLabel.textContent = "Enter initials: ";
    initialInput.textContent = "";
    initialButton.textContent = "Submit";
}

function displayNavBar() {
    showScore.textContent = "Show Highscores";
    showScore.setAttribute = ("href", "score.html");
//    showTime.textContent = timeLeft;
}

function displayStart(){
    horzLine.setAttribute("style", "display: none;");
    Answers.setAttribute("style", "display: none;");
    span1.setAttribute("style", "display: none;");
    span2.setAttribute("style", "display: none;");
    span3.setAttribute("style", "display: none;");
    span4.setAttribute("style", "display: none;");

    h1El.setAttribute("style", "margin: auto; margin-top: 10%; width: 50%; text-align: center;");
    startMessage.setAttribute("style", "margin: auto; width: 50%; text-align: center; font-size: 20px");
    startButton.setAttribute("style", "margin-top: 3em; line-height: 1.2em;");
    spanStart.setAttribute("class", "button");
    spanStart.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #7e307e;");
    
    displayNavBar();
    message = "Coding Quiz Challange"
    h1El.textContent = message;
    message = "Try to answer the following code-related questions within the time";
    message += "limit. Keep in mind that incorrect answers will penalize your scoretime";
    message += "by ten seconds!";
    startMessage.textContent = message;
    message = "Start Quiz";
    spanStart.textContent = message;
}

function displayScore() {
//    Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
    startMessage.setAttribute("style", "display: none;");
    spanStart.setAttribute("style", "display: none;");
    var highScoreAr = JSON.parse(localStorage.getItem("highScores")) || [];

    console.log(highScoreAr.length);
    console.log(highScoreAr);
    scoreListLength = highScoreAr.length;
    for (var i = 0; i < highScoreAr.length; i++) {
        console.log(highScoreAr[i].initials,highScoreAr[i].score);
    }

    page = 3;
    //Answers.setAttribute("style", "display: none;");
    Answers.textContent = "";
    startButton.setAttribute("style", "display: none");
    //Answers.setAttribute("style", "display: none");

    addInitial.setAttribute("style", "display: none;");
    h1El.textContent = "High Scores";
    var scorelistEl = document.createElement("ol");
//    Answers.appendChild(listEl);
    scoreSection.appendChild(scorelistEl);
    scoreSection.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");

    for (var i = 0; i < highScoreAr.length; i++) {
        var score = highScoreAr[i];
        var li = document.createElement("li");
        li.textContent =  score.initials + " - " + score.score;
        li.setAttribute("data-index", i);
        scorelistEl.appendChild(li);
    }
    scoreButtons.setAttribute("style", "margin-top: 3em; line-height: 1.2em;");
    returnButton.setAttribute("style", "margin-left: 45%;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #7e307e;");
    clearButton.setAttribute("style", "margin-left: 1em;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #7e307e;");    
    returnButton.textContent = "Return";
    clearButton.textContent = "Clear";
}

//clearButton.onclick = localStorage.clear();
clearButton.addEventListener("click", event => {
    localStorage.clear();
//    scoreSection.setAttribute("style", "display: none;");
    displayScore();
});

returnButton.addEventListener("click", event => {
    Answers.setAttribute("style", "display: none");
    scoreButtons.setAttribute("style", "display: none");
    scoreSection.setAttribute("style", "display: none");
    returnButton.setAttribute("style", "display: none");
    page = 0;
    correctAnswers = 0;
    currentQuestion = 0;
    timeLeft = 40;
    displayStart();
});

showScore.onclick = displayScore;

if (page === 0) {
    displayStart();
} else if (page == 1) {
    displayQuestion();
} else if (page == 2) {
    displayResults();
} else if (page == 3) {
    displayScore();
} else {
    displayResults();
}



