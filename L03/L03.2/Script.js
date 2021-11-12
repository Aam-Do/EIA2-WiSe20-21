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
        let wrongFeedbackId = document.createAttribute("id");
        wrongFeedbackId.value = "wrongFeedback";
        // wrongFeedback.appendChild(wrongFeedbackId);
        correctFeedback = document.createElement("span");
        let correctFeedbackId = document.createAttribute("id");
        correctFeedbackId.value = "correctFeedback";
        // correctFeedback.appendChild(correctFeedbackId);
        body.appendChild(wrongFeedback);
        body.appendChild(correctFeedback);
        prepTime = Number(formData.get("prepTime"));
        gameTime = Number(formData.get("gameTime"));
        word = formData.get("word")?.toString();
        createGameScreen();
        setInterval(handleTime, 1000);
    }
    function createGameScreen() {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = formData.get("background")?.toString();
        // set respective css rules to designated values
        timer = document.createElement("span");
        let timerId = document.createAttribute("id");
        timerId.value = "timer";
        // timer.appendChild(timerId);
        timer.innerHTML = prepTime.toString();
        let body = document.querySelector("body");
        body.appendChild(gameField);
        body.appendChild(timer);
        sequence = word.split("");
        let randomSequence = [...sequence];
        for (let i = 0; i < sequence.length; i++) {
            let span = document.createElement("span");
            let spanId = document.createAttribute("id");
            let random = Math.floor(Math.random() * randomSequence.length);
            console.log(random);
            spanId.value = (randomSequence.splice(random, 1)).join();
            span.innerHTML = spanId.value;
            gameField.appendChild(span);
            // span.appendChild(spanId);
        }
    }
    function handleTime() {
        if (gameOn == true) {
            if (gameTime == 0) {
                // endGame();
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
        }
        gameField.addEventListener("pointerdown", turnCard);
        gameOn = true;
    }
    function turnCard() {
    }
})(L03_1_Sequenz || (L03_1_Sequenz = {}));
//# sourceMappingURL=Script.js.map