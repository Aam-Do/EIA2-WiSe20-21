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
        console.log(formData);
        console.log(formData.get("size"));
        console.log(formData.get("prepTime"));
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
        prepTime = formData.get("prepTime");
    }
})(L03_1_Sequenz || (L03_1_Sequenz = {}));
//# sourceMappingURL=Script.js.map