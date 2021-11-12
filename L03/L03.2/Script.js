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
        // setInterval(handleTime(), 1000);
    }
    function createGameScreen() {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = formData.get("background")?.toString();
        // set respective css rules to designated values
        timer = document.createElement("span");
        let timerId = document.createAttribute("id");
        timerId.value = "timer";
        // timer.appendChild(timerId);
        let body = document.querySelector("body");
        body.appendChild(gameField);
        body.appendChild(timer);
        sequence = word.split("");
        let randomSequence = [...sequence];
        for (let i = 0; i < sequence.length; i++) {
            let span = document.createElement("span");
            let spanId;
        }
    }
})(L03_1_Sequenz || (L03_1_Sequenz = {}));
//# sourceMappingURL=Script.js.map