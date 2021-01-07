// global variables
var startButton = document.querySelector("#startButton");
var viewHighScore = document.getElementById("viewHighScore");
var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore");
var quizBox = document.querySelector(".quizBox");
var startPage = document.querySelector(".startPage");
var queCount = 0;
var score = 0;
var highScoresList = document.getElementById("highScoresList");
var startingMinutes = 1;
let time = startingMinutes * 60;

// questions array
var questions = [
    {
        numb: 1,
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
        numb: 2,
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
        numb: 3,
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
        numb: 4,
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
        numb: 5,
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
        numb: 6,
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
        numb: 7,
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
        numb: 8,
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
// and timer is started 
startButton.addEventListener("click", () => {
    quizBox.classList.add("activeQuiz");
    startPage.style.visibility = "hidden";
    showQuestions(0);
    setTimer();
});

//timer function
function setTimer() {
    const countdownEl = document.getElementById("countdown");
    //setting timer function to start every second 
    var counter = setInterval(startTimer, 1000);

    //timer function set to minutes and seconds
    function startTimer() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        //timer will minus one second every second and stops at 0
        countdownEl.innerHTML = `${minutes}:${seconds}`
        time--;
        time = time < 0 ? 0 : time;

        //when timer reaches 0, timeout function starts after 2 seconds
        //because alert appears to early otherwise 
        if (time <= 0) {
            clearInterval(counter);
            var timeout = setTimeout(timeout, 2000);
        }

        //alerting user time has run out and moving them to the end page 
        function timeout() {
            alert("Time out!");
            document.getElementById("timeText").style.display = "none";
            document.getElementById("countdown").style.display = "none";
            entrInitials();
        };
    };
};

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
                document.getElementById("correct").style.display = "block";
                document.getElementById("incorrect").style.display = "none";
            }
            // when the user selects the incorrect answer
            else {
                time = time - 10;
                document.getElementById("incorrect").style.display = "block";
                document.getElementById("correct").style.display = "none";
            }
            queCount++;
            // loop to see when the user gets to the last question 
            if (queCount < questions.length) {
                showQuestions(queCount);
            }
            else {
                // at the last Q, score is stored and entrInitials function starts
                localStorage.setItem("mostRecentScore", score);
                entrInitials();
            }
        });
    });
};

// user enters their initials here, quiz is hidden, timer stops 
function entrInitials(e) {
    var endPage = document.getElementById("end").style.display = "block";
    quizBox.style.display = "none";
    document.getElementById("timeText").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    // document.getElementById("timeout").style.display = "none";
    alert("You got " + score + "/" + questions.length);

    const initials = document.getElementById("initials");
    const saveScoreBtn = document.getElementById("saveScoreBtn");
    const finalScore = document.getElementById("finalScore");

    // score is retrieved from local storage 
    const mostRecentScore = localStorage.getItem("mostRecentScore");

    // highscore is retrieved and converted to an array
    const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    //max amount of highscores that can be displayed
    const maxHighScores = 5;

    //displaying final score on screen
    finalScore.innerText = "Your final score is " + mostRecentScore;

    //storing users initials in the form
    initials.addEventListener("keyup", () => {
        console.log(initials.value);
        //save button disabled unless user enters their initials
        saveScoreBtn.disabled = !initials.value;
    });

    //calling click event for save button 
    saveHighScore = (e) => {
        e.preventDefault();

        //defining score
        var score = {
            score: mostRecentScore,
            name: initials.value,
        };
        window.localStorage.setItem('score', JSON.stringify(score));
        console.log(score);

        //storing the score 
        highScores.push(score);
        //sorting the score in order of high to low
        highScores.sort((a, b) => b.score - a.score)
        //removing lowest scores if more than 5 are stored
        highScores.splice(5);

        //storing highscores to a string in local storage
        window.localStorage.setItem('highScores', JSON.stringify(highScores));
    };
    // go to high score page
    saveScoreBtn.addEventListener("click", () => {
        showHighScores();
    });
};

//high score page
function showHighScores(e) {
    //changing style to hide enter initials page and show high score page 
    document.getElementById("lastPage").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("viewHighScore").style.display = "none";

    const highScoresList = document.getElementById("highScoresList");

    //turning stored items from a string into an array 
    const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    const score = JSON.parse(localStorage.getItem("mostRecentScore")) || [];

    //setting each list item to show users initials and score
    highScoresList.innerHTML =
        highScores.map(score => {
            return `<li class="high-score">${score.name}-${score.score}</li>`;
        }).join("");
};


//go back button returns to beginning of quiz
goBack.addEventListener("click", () => {
    location.reload();
});

//viewing and clearing highscores
viewHighScore.addEventListener("click", () => {
    showHighScores();
    document.querySelector(".allQuizElements").style.display = "none";
});

clearScore.addEventListener("click", () => {
    localStorage.clear();
    highScoresList.style.display = "none";
});