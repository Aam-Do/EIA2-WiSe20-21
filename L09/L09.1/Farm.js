"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let container;
    let sideBar;
    let startButton;
    let nextButton;
    let foodStashes = {
        nHay: 80,
        nSeeds: 30,
        nCarrots: 40,
        nMeat: 60,
        nFish: 50
    };
    foodStashes.nH;
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
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map