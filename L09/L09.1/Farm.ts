/*
Aufgabe: L09.1 Old MacDonald's Farm
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 02.12.21
Quellen: Ich selbst
*/

namespace Farm {

    window.addEventListener("DOMContentLoaded", hndLoad);

    let container: HTMLDivElement;
    let sideBar: HTMLDivElement;
    let startButton: HTMLButtonElement;
    let nextButton: HTMLButtonElement;

    let cow: Animal = new Animal("Queen Elizabeth XVII", "cow", "hay", "moo", 15);
    let dog: Animal = new Animal("Cerberus", "dog", "meat", "woof", 8);
    let cat: Animal = new Animal("Sir Maximus Prime", "cat", "fish", "meow", 5);
    let duck: Animal = new Animal("Lord Kingston", "duck", "seeds", "quack", 3);
    let pig: Animal = new Animal("Bulldozer", "pig", "carrots", "oink", 9);
    let allAnimals: Animal[] = [cow, dog, cat, duck, pig];

    export interface Food {
        [key: string]: number;
    }
    let foodStashes: Food = {
        hay: 65,
        seeds: 30,
        carrots: 55,
        meat: 45,
        fish: 35
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
            let song: HTMLParagraphElement = document.createElement("p");
            song.innerHTML = allAnimals[i].sing();
            container.appendChild(song);

            let stock: HTMLSpanElement = document.createElement("span");
            stock.innerHTML = allAnimals[i].eat(foodStashes);
            sideBar.appendChild(stock);
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