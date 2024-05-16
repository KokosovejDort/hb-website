const questions = [
    "Хочешь избавиться от человечества?",
    "Мама: Андрей, ты и мной пожертвуешь, тебе меня не жаль?!",
    "YSL: мы предлагаем 3-годичный контракт с дальнейшим продлением и с переездом в Токио. Этим тоже жертвуешь?",
    "Мы (самые главные депутата мира) против твоего решения, ты уверен, что сможешь пойти против нас?"
];

const endMessages = [
    "Пффф, быстро сдался.",
    "Пффф, быстро сдался.",
    "Пффф, ну ты быстро сдался.",
    "Пффф, ну как ты мог тут сдаться."
];

let currentQuestionIndex = 0;

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('yesButton').style.display = 'inline-block';
    document.getElementById('noButton').style.display = 'inline-block';
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestionIndex];
    } else {
        document.getElementById("question").textContent = "От Саши: это всего лишь игра, но поздравляю";
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';
        document.getElementById('destroyButton').style.display = 'none';
    }
}

function yesClicked() {
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        document.getElementById("question").textContent = questions[currentQuestionIndex - 1];
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';
        document.getElementById('destroyButton').style.display = 'inline-block';
    } else {
        nextQuestion();
    }
}

function noClicked() {
    document.getElementById("question").textContent = endMessages[currentQuestionIndex];
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
}

function destroyClicked() {
    document.getElementById("question").textContent = "От Саши: это всего лишь игра, но поздравляю";
    document.getElementById('destroyButton').style.display = 'none';
}
