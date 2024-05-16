const questions = [
    "Question_1",
    "Question_2",
    "Question_3",
    "Question_4"
];

let currentQuestionIndex = 0;

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestionIndex];
    } else {
        endGame();
    }
}

function yesClicked() {
    currentQuestionIndex++;
    nextQuestion();
}

function noClicked() {
    currentQuestionIndex++;
    nextQuestion();
}

function endGame() {
    document.getElementById("question").textContent = "Thank you for playing!";
    document.querySelector(".buttons").style.display = "none";
}

nextQuestion();
