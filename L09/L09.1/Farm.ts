namespace Farm {

    window.addEventListener("DOMContentLoaded", hndLoad);

    let container: HTMLDivElement;
    let sideBar: HTMLDivElement;
    let startButton: HTMLButtonElement;
    let nextButton: HTMLButtonElement;

    interface Food {
        hay: number;
        seeds: number;
        carrots: number;
        meat: number;
        fish: number;
    }
    let foodStashes: Food = {
        hay: 80,
        seeds: 30,
        carrots: 40,
        meat: 60,
        fish: 50
    };

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

        let cow: Animal = new Animal();
    }


}