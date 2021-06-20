
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

// define body of document
var body = document.body;
// use h1 to show questions
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
var result = document.createElement("div");

// creating elements
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
body.appendChild(result);
result.setAttribute("id", "displayResults");


// set attributes
h1El.setAttribute("style", "margin: auto; width: 50%; text-align: left;");
Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
li1.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
li2.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
li3.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
li4.setAttribute("style", "margin-bottom: 1em; line-height: 1.2em;");
result.setAttribute("style", "color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");

 span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
 span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
 span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
 span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");

// mouse event hover over answers to change back ground volor
span1.addEventListener("mouseover", event =>{
    if (!answeredFlag) {
        span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
    }
});

span1.addEventListener("mouseout", event =>{
    if (!answeredFlag) {
        span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    }
});

span2.addEventListener("mouseover", event =>{
    if (!answeredFlag) {
        span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
    }
});

span2.addEventListener("mouseout", event =>{
    if (!answeredFlag) {
        span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    }
});

span3.addEventListener("mouseover", event =>{
    if (!answeredFlag) {
        span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
    }
});

span3.addEventListener("mouseout", event =>{
    if (!answeredFlag) {
        span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    }
});

span4.addEventListener("mouseover", event =>{
    if (!answeredFlag) {
        span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #800080;");
    }
});

span4.addEventListener("mouseout", event =>{
    if (!answeredFlag) {
        span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
    }
});

span1.addEventListener("click", event => {
    // once answered do not let select another answer
    if (!answeredFlag) {
        // if correct answer is first choice
        if(questions[currentQuestion].answer == 0){
            result.textContent = "Correct";
            correctAnswers++;
        } else {
            result.textContent = "Wrong";
        }
        result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
        answeredFlag = true;
    } 
});

span2.addEventListener("click", event => {
    // once answered do not let select another answer
    if (!answeredFlag) {
        // if correct answer is second choice
        if(questions[currentQuestion].answer == 1){
            result.textContent = "Correct";
            correctAnswers++;
        } else {
            result.textContent = "Wrong";
        }
        result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
        answeredFlag = true;
    }   
});

span3.addEventListener("click", event => {
    // once answered do not let select another answer
    if (!answeredFlag) {
        // if correct answer is third choice
        if(questions[currentQuestion].answer == 2){
            result.textContent = "Correct";
            correctAnswers++;
        } else {
            result.textContent = "Wrong";
        }
        result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
        answeredFlag = true;
    } 
});

span4.addEventListener("click", event => {
    if (!answeredFlag) {
        // if correct answer is fourth choice
        if(questions[currentQuestion].answer == 3){
            result.textContent = "Correct";
            correctAnswers++;
        } else {
            result.textContent = "Wrong";
        }
        result.setAttribute("style", "display: on; color: gray; font-style: italic; margin: auto; width: 50%; text-align: left; font-size: 20px");
        answeredFlag = true;
    } 
});

function runningTimer() {
    // set timer to timeLeft x 1000 msec
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            // if timer greater than 0 reduce timer
            timeLeft --;
        } else {
            // time passed reset timer and go to next question
            clearInterval(timeInterval)
            if(currentQuestion == questions.length-1){
                currentQuestion = 0;
            } else {
                currentQuestion++;
            }
            // once answered do not let select another answer
            answeredFlag = false;
            span1.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
            span2.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
            span3.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
            span4.setAttribute("style", "margin: .5em; padding: .5em; border-radius: .3em; background-color: #7e307e;");
            displayQuestion();
        }
    },1000);
}

function displayQuestion() {
    result.setAttribute("style", "display: none;");
    h1El.textContent = questions[currentQuestion].question;
    span1.textContent = questions[currentQuestion].choices[0];
    span2.textContent = questions[currentQuestion].choices[1];
    span3.textContent = questions[currentQuestion].choices[2];
    span4.textContent = questions[currentQuestion].choices[3];
    runningTimer();
}

displayQuestion();

