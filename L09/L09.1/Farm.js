"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let container;
    let sideBar;
    let startButton;
    let nextButton;
    let foodStashes = {
        hay: 80,
        seeds: 30,
        carrots: 40,
        meat: 60,
        fish: 50
    };
    function hndLoad() {
        startButton = document.querySelector("#start");
        startButton.addEventListener("pointerdown", hndStart);
    }
    function hndStart(_event) {
        container = document.querySelector("#content");
        container.innerHTML = "";
        sideBar = document.createElement("div");
        nextButton = document.createElement("button");
        // nextButton.addEventListener("pointerdown", hndNext);
        sideBar.appendChild(nextButton);
        let cow = new Animal();
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map