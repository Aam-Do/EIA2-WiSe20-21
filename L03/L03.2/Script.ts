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

        if (formData.get("word") == "") {
            alert("'Sequenz' muss ausgefüllt sein!")
            return;
        }

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.innerHTML = " ";

        wrongFeedback = document.createElement("span");
        wrongFeedback.classList.add("hidden");
        let wrongFeedbackId: Attr = document.createAttribute("id");
        wrongFeedbackId.value = "wrongFeedback";
        // wrongFeedback.appendChild(wrongFeedbackId);

        correctFeedback = document.createElement("span");
        correctFeedback.classList.add("hidden");
        let correctFeedbackId: Attr = document.createAttribute("id");
        correctFeedbackId.value = "correctFeedback";
        // correctFeedback.appendChild(correctFeedbackId);

        body.appendChild(wrongFeedback);
        body.appendChild(correctFeedback);

        prepTime = Number(formData.get("prepTime"));
        gameTime = Number(formData.get("gameTime"));

        word = <string>formData.get("word")?.toString();
        
        createGameScreen();

        setInterval(handleTime, 1000);
    }

    function createGameScreen(): void {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = <string>formData.get("background")?.toString();
    
        // set respective css rules to designated values

        timer = document.createElement("span");
        let timerId: Attr = document.createAttribute("id");
        timerId.value = "timer"
        // timer.appendChild(timerId);
        timer.innerHTML = prepTime.toString();

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.appendChild(gameField);
        body.appendChild(timer);

        sequence = word.split("");
        
        let randomSequence: string[] = [...sequence];

        for (let i = 0; i < sequence.length; i++) {
            let span: HTMLSpanElement = document.createElement("span");
            let spanId: Attr = document.createAttribute("id");
            
            let random: number = Math.floor(Math.random() * randomSequence.length);
            console.log(random);

            spanId.value = (randomSequence.splice(random, 1)).join();
            
            span.innerHTML = spanId.value;
            span.classList.add("front")
            gameField.appendChild(span);
            // span.appendChild(spanId);
        }

    }

    function handleTime(): void {
        if (gameOn == true) {
            if (gameTime == 0) {
                // endGame();
            } else {
                gameTime--
                timer.innerHTML = gameTime.toString();
            }
        } else {
            if (prepTime == 0) {
                startGame();
            } else {
                prepTime--
                timer.innerHTML = prepTime.toString();
            }
        }
    }

    function startGame(): void {
        for (let i = 0; i < gameField.childElementCount; i++) {
            gameField.children[i].innerHTML = " ";
            gameField.children[i].classList.remove("front");
            gameField.children[i].classList.add("back");
        }
        gameField.addEventListener("pointerdown", turnCard);
        gameOn = true;
    }

    function turnCard(_event: PointerEvent): void {
        let card: HTMLElement = <HTMLElement>_event.target;
        console.log(card);
    }

}