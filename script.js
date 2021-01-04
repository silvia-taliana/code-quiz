var startButton = document.querySelector("#startButton");
var quizBox = document.querySelector(".quizBox");
var startPage = document.querySelector(".startPage");
// var options = document.querySelector(".quizBox .optionList .btn")



// when start button clicked
startButton.addEventListener("click", () => {
    quizBox.classList.add("activeQuiz");
    startPage.style.visibility = "hidden";
    showQuestions(0);
})


// var queCount = 0;
// var btn = quizBox.querySelector(".optionList .btn");

// btn.onclick = () => {
//     queCount++;
//     showQuestions(queCount);
// }

// function showQuestions(index) {
//     var queText = document.querySelector(".queText");
//     var optionList = document.querySelector(".optionList");
//     var queTag = '<span>' + questions[index].question + '</span>';
//     var optionTag = '<button class="btn">' + questions[index].options[0] + '</button>'
//         + '<button class="btn">' + questions[index].options[1] + '</button>'
//         + '<button class="btn">' + questions[index].options[2] + '</button>'
//         + '<button class="btn">' + questions[index].options[3] + '</button>';
//     queText.innerHTML = queTag;
//     optionList.innerHTML = optionTag;
//     var score = 0;
//     for (var i = 0; i < questions.length; i++) {
//         var response = questions[i].options;
//         if (response == questions[i].answer) {
//             score++;
//             alert("Correct!");
//         } else {
//             alert("Incorrect");
//         }
//     }
//     alert("You got " + score + "/" + questions.length);
//     console.log(response)
}

// function showQuestions(index) {
//     for (var i = 0; i < questions.length; i++) {
//         var response = window.questions(questions[i].question);
//         if (response == questions[i].answer) {
//             score++;
//             alert("Correct!");
//         } else {
//             alert("Incorrect");
//         }
//     }
// }

/*
// getting questions and answers from array
function showQuestions(index) {
    var queText = document.querySelector(".queText");
    var optionList = document.querySelector(".optionList");
    let queTag = '<span>' + questions[index].question + '</span>';
    let optionTag = '<div class="optionList">' + questions[index].options[0] + '<label></label></div>'
        + '<div class="optionList">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="optionList">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="optionList">' + questions[index].options[3] + '<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
}
*/

// questions array
var questions = [
    {
        numb: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: [
            "<script>",
            "<scripting>",
            "<javascript>",
            "<js>"
        ]
    },
    {
        numb: 2,
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
        numb: 3,
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
        numb: 4,
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
        numb: 5,
        question: "How does a FOR loop start?",
        answer: "for (i = 0; i <= 5; i++)",
        options: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)"
        ]
    },
    {
        numb: 6,
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
        numb: 7,
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
        numb: 8,
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
        numb: 9,
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
        numb: 10,
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



// var questions = [
//     {
//         prompt: "first javascript question?\n(a) one\n\(b) two\n\(c) three\n\(d) four",
//         answer: "a"
//     },
//     {
//         prompt: "second javascript question?\n(a) one\n\(b) two\n\(c) three\n\(d) four",
//         answer: "c"
//     },
//     {
//         prompt: "third javascript question?\n(a) one\n\(b) two\n\(c) three\n\(d) four",
//         answer: "a"
//     },
//     {
//         prompt: "fourth javascript question?\n(a) one\n\(b) two\n\(c) three\n\(d) four",
//         answer: "d"
//     },
//     {
//         prompt: "fith javascript question?\n(a) one\n\(b) two\n\(c) three\n\(d) four",
//         answer: "b"
//     }
// ]
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Incorrect");
//     }
// }
// alert("You got " + score + "/" + questions.length);



/* psuedo code
starts at main page
1. when user presses start button, first question appears and
timer starts counting down
2. user answers question 1, if correct: correct appears below,
a point is added to their score (stored) and second question appears.
if incorrect: incorrect appears below,
timer deducts 10 seconds and second question appears.
    NOTE: incorrect answers can equal 0 and correct answers can equal 1
    so then the var sum = all answers added together = final score
    can possibly declare sum = a + b + c etc. where a = first answer etc.
    OR could use a function??
    global variables
    var answer;
    var correct;
    var incorrect;
    function score() {
        var finalScore = " "
        if (answer = "correct")
        finalScore++;
    }
3. step 2 repeats until all questions are answered OR timer
reaches 0
4. when either of the steps in 3 is reached, the "All done"
page appears and a box appears where the user can insert their
initials, which are stored alongside their score.
5. the highscore page appears and every user who has played the
quiz is listed according to their score. */
