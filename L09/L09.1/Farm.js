"use strict";
/*
Aufgabe: L09.1 Old MacDonald's Farm
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 02.12.21
Quellen: Ich selbst
*/
var Farm;
(function (Farm) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let container;
    let sideBar;
    let startButton;
    let nextButton;
    let cow = new Farm.Animal("Queen Elizabeth XVII", "cow", "hay", "moo", 15);
    let dog = new Farm.Animal("Cerberus", "dog", "meat", "woof", 8);
    let cat = new Farm.Animal("Sir Maximus Prime", "cat", "fish", "meow", 5);
    let duck = new Farm.Animal("Lord Kingston", "duck", "seeds", "quack", 3);
    let pig = new Farm.Animal("Bulldozer", "pig", "carrots", "oink", 9);
    let allAnimals = [cow, dog, cat, duck, pig];
    let foodStashes = {
        hay: 65,
        seeds: 30,
        carrots: 55,
        meat: 45,
        fish: 35
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
            let song = document.createElement("p");
            song.innerHTML = allAnimals[i].sing();
            container.appendChild(song);
            let stock = document.createElement("span");
            stock.innerHTML = allAnimals[i].eat(foodStashes);
            sideBar.appendChild(stock);
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
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map