
// color variables
// --bgdLight = #7e307e;
// --bgdLDark = #800080;

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
var listEl = document.createElement("ol");
// using li elements for each answer
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// creating elements
body.appendChild(h1El);
body.appendChild(Answers);
Answers.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


// set attributes
h1El.setAttribute("style", "margin: auto; width: 50%; text-align: left;");
Answers.setAttribute("style", "margin: auto; width: 50%; text-align: left; font-size: 20px");
li1.setAttribute("style", "marging: auto; padding: 0.2em; background-color: #800080;");
li2.setAttribute("style", "marging: auto; padding: 0.2em; background-color: #800080;");
li3.setAttribute("style", "marging: auto; padding: 0.2em; background: purple;");
li4.setAttribute("style", "marging: auto; padding: 0.2em; background: purple;");



// // mouse over list items
// li1.addEventListener("mouseover", event =>{
//     // li1.setAttribute("style", "background-color: var(--bgdLight);");
//     li1.setAttribute("style", "background-color: #7e307e;");
//     console.log("on list1");
// });

// li1.addEventListener("mouseout", event =>{
//     // li1.setAttribute("style", "background-color: var(--bgdLight);");
//     li1.setAttribute("style", "background-color: #800080;");
//     console.log("out list1");
// });

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
        li1.textContent = questions[currentQuestion].choices[0];
        li2.textContent = questions[currentQuestion].choices[1];
        li3.textContent = questions[currentQuestion].choices[2];
        li4.textContent = questions[currentQuestion].choices[3];
        currentQuestion++;
    } else {
        currentQuestion = 0;
    }
    runningTimer();
}

displayQuestion();

