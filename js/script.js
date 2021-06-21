
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

// variable to show Start Quiz button
var startButton = document.createElement("div");
var spanStart = document.createElement("span");

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
body.appendChild(startButton);
body.appendChild(spanStart);

// document.getElementById("time").innerHTML = "time " + timeLeft;


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

// mouse event hover over answers to change back ground volor
span1.addEventListener("mouseover", event =>{
    span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
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

span1.addEventListener("click", event => {
    // once answered do not let select another answer
    // if (!answeredFlag) {
        // if correct answer is first choice
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
        answeredFlag = true;
    
    // } else {
    //     if(correctFlag) {
    //         // runningTimer();
    //         correctFlag = false;
    //     } else {
    //         timeLeft -= 10;
    //         // runningTimer();
    //         wrongFlag = false;
    //     }
    //}
});

span2.addEventListener("click", event => {
    // once answered do not let select another answer
    // if (!answeredFlag) {
        // if correct answer is second choice
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
    //     answeredFlag = true;
    // }
});

span3.addEventListener("click", event => {
    // once answered do not let select another answer
    // if (!answeredFlag) {
        // if correct answer is third choice
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
    // } else {
    //     if(correctFlag) {
    //         runningTimer();
    //         correctFlag = false;
    //     } else {
    //         timeLeft -= 10;
    //         runningTimer();
    //         wrongFlag = false;
    //     }
    // }
});

span4.addEventListener("click", event => {
    // if (!answeredFlag) {
        // if correct answer is fourth choice
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
    // } else {
    //     if(correctFlag) {
    //         runningTimer();
    //         correctFlag = false;
    //     } else {
    //         timeLeft -= 10;
    //         runningTimer();
    //         wrongFlag = false;
    //     }
    //}
});

function runningTimer() {
    // set timer to timeLeft x 1000 msec
    // var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            // if timer greater than 0 reduce timer
            timeLeft --;
            message = "Time ";
            message = message.concat(timeLeft);
            showTime.textContent = message;
            if (correctFlag) {
                correctFlag = false
                if(currentQuestion == questions.length-1){
                    showTime.setAttribute("style", "display: none");
                    quizOverFlag = true;
                } else {
                    currentQuestion++;
                    displayQuestion();
                }
            } else if (wrongFlag) {
                wrongFlag = false;
                if(currentQuestion == questions.length-1){
                    showTime.setAttribute("style", "display: none");
                    quizOverFlag = true;
                } else {
                    currentQuestion++;
                    displayQuestion();
                }
            }
        } else {
            // time passed reset timer and go to next question
            clearInterval(timeInterval)
            if(currentQuestion == questions.length-1){
                // currentQuestion = 0;
                quizOverFlag = true;
                clearInterval(timeInterval);
            } else {
                currentQuestion++;
            }

            if (!quizOverFlag) {
                // once answered do not let select another answer
                showTime.setAttribute("style", "display: none");
                answeredFlag = false;
                span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
                span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
                span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
                span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
                displayQuestion();
            } else {
                horzLine.setAttribute("style", "display: none;");
                result.setAttribute("style", "display: none;");
                displayResults();
            }
        }
    },1000);
}


function displayQuestion() {
    showScore.textContent = "View Highscore";
    message = "Time ";
    message = message.concat(timeLeft);
    showTime.textContent = message;

    h1El.textContent = questions[currentQuestion].question;
    span1.textContent = questions[currentQuestion].choices[0];
    span2.textContent = questions[currentQuestion].choices[1];
    span3.textContent = questions[currentQuestion].choices[2];
    span4.textContent = questions[currentQuestion].choices[3];
    horzLine.setAttribute("style", "display: none;");
    result.setAttribute("style", "display: none;");
    runningTimer();
}

function displayResults() {
    message = "All done!"
    h1El.textContent = message;
    message = "Your final score is:";
    message += correctAnswers * 5 + ".";
    Answers.textContent = message;
}

function displayNavBar() {
    showScore.textContent = "Show Highscores";
    showScore.setAttribute = ("href", "score.html");
//    showTime.textContent = timeLeft;
}

function displayStart(){
    horzLine.setAttribute("style", "display: none;");
    h1El.setAttribute("style", "margin: auto; margin-top: 10%; width: 50%; text-align: center;");
    Answers.setAttribute("style", "margin: auto; margin-top: 2em; width: 50%; text-align: center; font-size: 20px");
    startButton.setAttribute("style", "margin-top: 3em; line-height: 1.2em;");
    spanStart.setAttribute("style", "margin-left: 48%;  padding: .5em; width: 20%; color: white; text-align: center; border-radius: .3em; background-color: #7e307e;");
    displayNavBar();
    message = "Coding Quiz Challange"
    h1El.textContent = message;
    message = "Try to answer the following code-related questions within the time";
    message += "limit. Keep in mind that incorrect answers will penalie your scoretime";
    message += "by ten seconds!";
    Answers.textContent = message;
    message = "Start Quiz";
    spanStart.textContent = message;
}

if (page === 0) {
    displayStart();
} else if (page == 1) {
    displayQuestion();
} else if (page == 2) {
    displayResults();
} else if (page == 3) {
    displayHighScore();
} else {
    displayResults();
}

// if (!quizOverFlag){
// //    displayNavBar();
//     displayQuestion();
// } else {
//     displayNavBar();
//     displayResults();    
// }


