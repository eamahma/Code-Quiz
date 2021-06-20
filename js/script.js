
// color variables
var bgdLight = "#7e307e";
var bgdLDark = "#800080";

// Question and Answer array
var questions = [{
    question: "Commonly used data types DO NOT include",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: 2
}, {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: 3
}, {
    question: "A Very useful tool used during development and debugging for printing content to debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    answer: 3
}, {
    question: "The Condition in an if / else statement is enclosed in _____.",
    choices: ["1. qoutes", "2. curly brackets", "3. parantheses", "4. square brackets"],
    answer: 2
}];

// global variables
var currentQuestion = 0;

// define body of document
var body = document.body;
// use h1 to show questions
var h1El = document.createElement("h1");
// use div for answer sections
var Answers = document.createElement("div");
// ordered list for answers
// var listEl = document.createElement("ol");
// using li elements for each answer
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// using div elements for each answer
var choice1 = document.createElement("div");
var choice2 = document.createElement("div");
var choice3 = document.createElement("div");
var choice4 = document.createElement("div");

var span1 = document.createElement("span");
var span2 = document.createElement("span");
var span3 = document.createElement("span");
var span4 = document.createElement("span");

// creating elements
body.appendChild(h1El);
body.appendChild(Answers);
// Answers.appendChild(listEl);
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
Answers.appendChild(choice1);
Answers.appendChild(choice2);
Answers.appendChild(choice3);
Answers.appendChild(choice4);

choice1.appendChild(span1);
choice2.appendChild(span2);
choice3.appendChild(span3);
choice4.appendChild(span4);

// set attributes
h1El.setAttribute("style", "margin: auto; width: 50%; text-align: left;");
Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
// li1.setAttribute("style", "marging: auto; padding: 0.2em; background-color: #800080;");
// li2.setAttribute("style", "marging: auto; padding: 0.2em; background-color: #800080;");
// li3.setAttribute("style", "marging: auto; padding: 0.2em; background: purple;");
// li4.setAttribute("style", "marging: auto; padding: 0.2em; background: purple;");
 choice1.setAttribute("style", "marging-bottom: 1em; line-height: 1.8em;");
 choice2.setAttribute("style", "marging-bottom: 1em; line-height: 1.8em");
 choice3.setAttribute("style", "marging-bottom: 1em; line-height: 1.8em");
 choice4.setAttribute("style", "marging-bottom: 1em; line-height: 1.8em");
 span1.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
 span2.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
 span3.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
 span4.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");

// function mouseOverli1(){
//     // li1.setAttribute("style", "background-color: var(--bgdLight);");
//     li1.setAttribute("style", "background-color: #7e307e;");
// }

// function mouseOverli2(){
//     // li1.setAttribute("style", "background-color: var(--bgdLight);");
//     li2.setAttribute("style", "background-color: #7e307e;");
// }

// function mouseOverli3(){
//     // li1.setAttribute("style", "background-color: var(--bgdLight);");
//     li3.setAttribute("style", "background-color: #7e307e;");
// }

// function mouseOverli4(){
//     // li1.setAttribute("style", "background-color: var(--bgdLight);");
//     li4.setAttribute("style", "background-color: #7e307e;");
// }




// mouse event hover over answers to change back ground volor
span1.addEventListener("mouseover", event =>{
    span1.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #800080;");
});

span1.addEventListener("mouseout", event =>{
    span1.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
});

span2.addEventListener("mouseover", event =>{
    span2.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #800080;");
});

span2.addEventListener("mouseout", event =>{
    span2.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
});

span3.addEventListener("mouseover", event =>{
    span3.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #800080;");
});

span3.addEventListener("mouseout", event =>{
    span3.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
});

span4.addEventListener("mouseover", event =>{
    span4.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #800080;");
});

span4.addEventListener("mouseout", event =>{
    span4.setAttribute("style", "margin: .5em; padding: .2em; border-radius: .3em; background-color: #7e307e;");
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
            displayQuestion();
        }
    },1000);
}

function displayQuestion() {
    if (currentQuestion < questions.length) {
        console.log(currentQuestion);
        h1El.textContent = questions[currentQuestion].question;
        span1.textContent = questions[currentQuestion].choices[0];
        span2.textContent = questions[currentQuestion].choices[1];
        span3.textContent = questions[currentQuestion].choices[2];
        span4.textContent = questions[currentQuestion].choices[3];
        currentQuestion++;
    } else {
        currentQuestion = 0;
    }
    runningTimer();
}

// mouse over list items
// li1.addEventListener("mouseover", mouseOverli1);
// li2.addEventListener("mouseover", mouseOverli2);
// li3.addEventListener("mouseover", mouseOverli3);
// li4.addEventListener("mouseover", mouseOverli4);

displayQuestion();

