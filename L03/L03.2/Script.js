"use strict";
var L03_1_Sequenz;
(function (L03_1_Sequenz) {
    let gameOn = false;
    let word;
    let prepTime;
    let gameTime;
    let sequence;
    let timer;
    let gameField;
    let streak = 0;
    let wrongFeedback;
    let correctFeedback;
    let formData;
    let countDown;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("pointerup", prepareGame);
    }
    function prepareGame(_event) {
        formData = new FormData(document.forms[0]);
        if (formData.get("word") == "") {
            alert("'Sequenz' muss ausgefüllt sein!");
            return;
        }
        let body = document.querySelector("body");
        body.innerHTML = " ";
        wrongFeedback = document.createElement("span");
        wrongFeedback.classList.add("hidden");
        wrongFeedback.id = "wrongFeedback";
        wrongFeedback.innerHTML = "Falsch! Versuchs nochmal";
        correctFeedback = document.createElement("span");
        correctFeedback.classList.add("hidden");
        correctFeedback.id = "correctFeedback";
        correctFeedback.innerHTML = "Korrekt! Sehr gut!";
        body.appendChild(wrongFeedback);
        body.appendChild(correctFeedback);
        prepTime = Number(formData.get("prepTime"));
        gameTime = Number(formData.get("gameTime"));
        word = formData.get("word")?.toString();
        createGameScreen();
        countDown = setInterval(handleTime, 1000);
    }
    function createGameScreen() {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = formData.get("background")?.toString();
        // set respective css rules to designated values
        timer = document.createElement("span");
        timer.id = "timer";
        timer.innerHTML = prepTime.toString();
        let body = document.querySelector("body");
        body.appendChild(gameField);
        body.appendChild(timer);
        sequence = word.split("");
        let randomSequence = [...sequence];
        for (let i = 0; i < sequence.length; i++) {
            let span = document.createElement("span");
            let random = Math.floor(Math.random() * randomSequence.length);
            console.log(random);
            span.id = (randomSequence.splice(random, 1)).join();
            span.innerHTML = span.id;
            span.classList.add("front");
            gameField.appendChild(span);
        }
    }
    function handleTime() {
        if (gameOn == true) {
            if (gameTime == 0) {
                endGame();
            }
            else {
                gameTime--;
                timer.innerHTML = gameTime.toString();
            }
        }
        else {
            if (prepTime == 0) {
                startGame();
            }
            else {
                prepTime--;
                timer.innerHTML = prepTime.toString();
            }
        }
    }
    function startGame() {
        for (let i = 0; i < gameField.childElementCount; i++) {
            gameField.children[i].innerHTML = " ";
            gameField.children[i].classList.remove("front");
            gameField.children[i].classList.add("back");
        }
        gameField.addEventListener("pointerdown", turnCard);
        gameOn = true;
        timer.innerHTML = gameTime.toString();
    }
    function turnCard(_event) {
        let card = _event.target;
        if (card.classList.contains("back") == false) {
            return;
        }
        card.classList.remove("back");
        card.classList.add("front");
        card.innerHTML = card.id;
        if (card.id != sequence[streak]) {
            sendFalseFeedback();
            return;
        }
        streak++;
        if (streak == sequence.length) {
            clearInterval(countDown);
            correctFeedback.classList.remove("hidden");
            gameField.removeEventListener("pointerdown", turnCard);
        }
    }
    function sendFalseFeedback() {
        wrongFeedback.classList.remove("hidden");
        gameField.removeEventListener("pointerdown", turnCard);
        streak = 0;
        setTimeout(function () {
            wrongFeedback.classList.add("hidden");
            gameField.addEventListener("pointerdown", turnCard);
            for (let i = 0; i < gameField.childElementCount; i++) {
                gameField.children[i].innerHTML = " ";
                gameField.children[i].classList.remove("front");
                gameField.children[i].classList.add("back");
            }
        }, 2000);
    }
    function endGame() {
        clearInterval(countDown);
        let body = document.querySelector("body");
        body.removeChild(gameField);
        body.removeChild(timer);
        let gameOver = document.createElement("h1");
        gameOver.innerHTML = "Die Zeit ist um! Du hast verloren :(";
        body.appendChild(gameOver);
    }
})(L03_1_Sequenz || (L03_1_Sequenz = {}));
//# sourceMappingURL=Script.js.map