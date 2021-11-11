namespace L03_1_Sequenz {
    let gameOn: boolean = false;
    let word: string;
    let prepTime: number;
    let gameTime: number;
    let sequence: string[];
    let timer: HTMLSpanElement;
    let gameField: HTMLDivElement;
    let streak: number = 0;
    let wrongFeedback: HTMLSpanElement;
    let correctFeedback: HTMLSpanElement;
    let formData: FormData;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("pointerup", prepareGame);
    }

    function prepareGame(_event: Event): void {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        console.log(formData.get("size"));
        console.log(formData.get("prepTime"));

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.innerHTML = " ";

        wrongFeedback = document.createElement("span");
        let wrongFeedbackId: Attr = document.createAttribute("id");
        wrongFeedbackId.value = "wrongFeedback";
        // wrongFeedback.appendChild(wrongFeedbackId);

        correctFeedback = document.createElement("span");
        let correctFeedbackId: Attr = document.createAttribute("id");
        correctFeedbackId.value = "correctFeedback";
        // correctFeedback.appendChild(correctFeedbackId);

        body.appendChild(wrongFeedback);
        body.appendChild(correctFeedback);

        prepTime = formData.get("prepTime");
    }



}