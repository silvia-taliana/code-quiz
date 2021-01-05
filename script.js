// global variables
var startButton = document.querySelector("#startButton");
var quizBox = document.querySelector(".quizBox");
var startPage = document.querySelector(".startPage");
var queCount = 0;
var score = 0;
// var btn = quizBox.querySelector(".optionList .btn");

// questions array
var questions = [
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answer: "alert(\"Hello World\");",
        options: [
            "msgBox(\"Hello World\");",
            "alertBox(\"Hello World\");",
            "alert(\"Hello World\");",
            "msg(\"Hello World\");"
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
            "myFunction()"
        ]
    },
    {
        question: "How do you write an IF statement for executing some code if i is NOT equal to 5?",
        answer: "if (i != 5)",
        options: [
            "if i <> 5",
            "if (i <> 5)",
            "if (i != 5)",
            "if i =! 5 then"
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answer: "var carName;",
        options: [
            "variable carName;",
            "v carName;",
            "var carName;",
            "addvariable carName;"
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
            "x",
            "*",
            "-",
            "="
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer: "var colors = [\"red\", \"green\", \"blue\"]",
        options: [
            "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
            "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
            "var colors = [\"red\", \"green\", \"blue\"]",
            "var colors = \"red\", \"green\", \"blue\""
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onclick",
            "onmouseclick",
            "onchange",
            "onmouseover"
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answer: "true",
        options: [
            "false",
            "true",
            "NaN",
            "null"
        ]
    },
];

// when start button clicked, quiz questions show and start page is hidden
startButton.addEventListener("click", () => {
    quizBox.classList.add("activeQuiz");
    startPage.style.visibility = "hidden";
    showQuestions(0);
})

// function rotates through each question 
function showQuestions(index) {
    // query selectors call on the questions and answer buttons
    var queText = document.querySelector(".queText");
    var optionList = document.querySelector(".optionList");
    // Q&A's taken from the array
    var queTag = '<span>' + questions[index].question + '</span>';
    var optionTag = '<button class="btn btn-primary  answerBtn">' + questions[index].options[0] + '</button>'
        + '<button class="btn btn-primary answerBtn">' + questions[index].options[1] + '</button>'
        + '<button class="btn btn-primary answerBtn">' + questions[index].options[2] + '</button>'
        + '<button class="btn btn-primary answerBtn">' + questions[index].options[3] + '</button>';
    // Q&A's shown on the screen 
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;

    // function for when answer button is clicked by user
    document.querySelectorAll(".answerBtn").forEach(function (button) {
        button.addEventListener("click", function () {
            // when the user selects the correct answer
            if (button.innerHTML === questions[index].answer) {
                score++;
                console.log(score);
                alert("correct");
            }
            // when the user selects the incorrect answer
            else {
                alert("incorrect");
                // minus time
            }
            queCount++;
            // loop to see when the user gets to the last question 
            if (queCount < questions.length) {
                showQuestions(queCount);
                console.log(queCount);
            }
            else {
                // if it is the last question, the showInitials function starts
                entrInitials();
            }
        });
    });
}

// user enters their initials here, quiz is hidden, timer stops 
function entrInitials(event) {
    // var initials = document.getElementById("#enterInitials");
    // var enterBtn = document.getElementById("#enterBtn");
    // addEventListener("click", function(){

    // })
    var endPage = document.getElementById("end").style.display = "block";
    quizBox.style.display = "none";
    alert("You got " + score + "/" + questions.length);
}

const initials = document.getElementById("enterInitials");
const enterBtn = document.getElementById("enterBtn");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// finalScore.innerText = mostRecentScore;

// initials.addEventListener("keyup", () => {
//     enterBtn.disabled = !initials.value;
// });

saveHighScore = (e) => {
    e.preventDefault();
    console.log("save button clicked")

    const score = {
        score: mostRecentScore,
        name: initials.value,
    };
}
/*   highScores.push(score);
   highScores.sort((a, b) => b.score - a.score);

   localStorage.setItem('highScores', JSON.stringify(highScores));
   window.location.assign('/');

   console.log(highScores);
};
console.log(initials); */
