namespace Farm {

    window.addEventListener("DOMContentLoaded", hndLoad);

    let container: HTMLDivElement;
    let sideBar: HTMLDivElement;
    let startButton: HTMLButtonElement;
    let nextButton: HTMLButtonElement;

    let foodStashes: object = {
        nHay: 80,
        nSeeds: 30,
        nCarrots: 40,
        nMeat: 60,
        nFish: 50
    };

    foodStashes.nH

    function hndLoad(): void {
        startButton = <HTMLButtonElement>document.querySelector("#start");
        startButton.addEventListener("pointerdown", hndStart);
    }

    function hndStart(_event: Event): void {
        container = <HTMLDivElement>document.querySelector("#content");
        container.innerHTML = "";

        sideBar = document.createElement("div");
        nextButton = document.createElement("button");
        // nextButton.addEventListener("pointerdown", hndNext);
        sideBar.appendChild(nextButton);


    }


}