"use strict";
/*
Aufgabe: L10.1 Old MacDonald's Farm Heritage
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 14.12.21
Quellen: Ich selbst
*/
var FarmHeritage;
(function (FarmHeritage) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let container;
    let sideBar;
    let startButton;
    let nextButton;
    let allAnimals = [new FarmHeritage.Cow("Queen Elizabeth XVII"), new FarmHeritage.Dog("Cerberus"), new FarmHeritage.Cat("Sir Maximus Prime"), new FarmHeritage.Duck("Lord Kingston"), new FarmHeritage.Pig("Bulldozer")];
    let foodStashes = {
        hay: 74,
        seeds: 33,
        carrots: 68,
        meat: 52,
        fish: 46
    };
    function hndLoad() {
        startButton = document.querySelector("#start");
        startButton.addEventListener("pointerdown", hndStart);
    }
    function hndStart(_event) {
        let body = document.querySelector("body");
        container = document.querySelector("#content");
        container.innerHTML = "";
        sideBar = document.createElement("div");
        sideBar.id = "sideBar";
        let headline = document.createElement("p");
        headline.innerHTML = "Food Stashes:";
        nextButton = document.createElement("button");
        nextButton.innerHTML = "Next Day";
        nextButton.addEventListener("pointerdown", hndNext);
        sideBar.appendChild(headline);
        sideBar.appendChild(nextButton);
        body.appendChild(sideBar);
        endDay();
    }
    function endDay() {
        for (let i = 0; i < allAnimals.length; i++) {
            let stock = document.createElement("span");
            stock.innerHTML = allAnimals[i].eat(foodStashes);
            sideBar.appendChild(stock);
            let song = document.createElement("p");
            song.innerHTML = allAnimals[i].sing();
            if (song.innerHTML != "")
                container.appendChild(song);
        }
        for (let i = 0; i < allAnimals.length; i++) {
            let specialActions = document.createElement("span");
            specialActions.innerHTML = allAnimals[i].doSpecialAction();
            if (specialActions.innerHTML != "")
                sideBar.appendChild(specialActions);
        }
    }
    function hndNext() {
        container.innerHTML = "";
        let spans = sideBar.querySelectorAll("span");
        spans.forEach(element => {
            sideBar.removeChild(element);
        });
        endDay();
    }
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Farm.js.map