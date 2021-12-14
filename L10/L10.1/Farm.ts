/*
Aufgabe: L10.1 Old MacDonald's Farm Heritage
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 14.12.21
Quellen: Ich selbst
*/

namespace FarmHeritage {

    window.addEventListener("DOMContentLoaded", hndLoad);

    let container: HTMLDivElement;
    let sideBar: HTMLDivElement;
    let startButton: HTMLButtonElement;
    let nextButton: HTMLButtonElement;

    let allAnimals: Animal[] = [new Cow("Queen Elizabeth XVII"), new Dog("Cerberus"), new Cat("Sir Maximus Prime"), new Duck("Lord Kingston"), new Pig("Bulldozer")];

    export interface Food {
        [key: string]: number;
    }
    let foodStashes: Food = {
        hay: 74,
        seeds: 33,
        carrots: 68,
        meat: 52,
        fish: 46
    };

    function hndLoad(): void {
        startButton = <HTMLButtonElement>document.querySelector("#start");
        startButton.addEventListener("pointerdown", hndStart);
    }

    function hndStart(_event: Event): void {

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        container = <HTMLDivElement>document.querySelector("#content");
        container.innerHTML = "";

        sideBar = document.createElement("div");
        sideBar.id = "sideBar";

        let headline: HTMLParagraphElement = document.createElement("p");
        headline.innerHTML = "Food Stashes:";

        nextButton = document.createElement("button");
        nextButton.innerHTML = "Next Day";
        nextButton.addEventListener("pointerdown", hndNext);
        sideBar.appendChild(headline);
        sideBar.appendChild(nextButton);
        body.appendChild(sideBar);

        endDay();
    }

    function endDay(): void {
        for (let i: number = 0; i < allAnimals.length; i++) {
            let stock: HTMLSpanElement = document.createElement("span");
            stock.innerHTML = allAnimals[i].eat(foodStashes);
            sideBar.appendChild(stock);

            let song: HTMLParagraphElement = document.createElement("p");
            song.innerHTML = allAnimals[i].sing();
            if (song.innerHTML != "")
                container.appendChild(song);
        }
        for (let i: number = 0; i < allAnimals.length; i++) {
            let specialActions: HTMLSpanElement = document.createElement("span");
            specialActions.innerHTML = allAnimals[i].doSpecialAction();
            sideBar.appendChild(specialActions);
        }
    }

    function hndNext(): void {
        container.innerHTML = "";
        let spans: NodeListOf<HTMLSpanElement> = sideBar.querySelectorAll("span");
        spans.forEach(element => {
            sideBar.removeChild(element);
        });
        endDay();
    }


}