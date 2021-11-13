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
    let countDown: number;

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

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);

        wrongFeedback = document.createElement("span");
        wrongFeedback.classList.add("hidden");
        wrongFeedback.id = "wrongFeedback";
        wrongFeedback.innerHTML = "Falsch! Versuchs nochmal"
        correctFeedback = document.createElement("span");
        correctFeedback.classList.add("hidden");
        correctFeedback.id = "correctFeedback";
        correctFeedback.innerHTML = "Das ist korrekt! Sehr gut!"
        body.appendChild(wrongFeedback);
        body.appendChild(correctFeedback);

        prepTime = Number(formData.get("prepTime"));
        gameTime = Number(formData.get("gameTime"));
        word = <string>formData.get("word")?.toString();
        
        createGameScreen();
        countDown = setInterval(handleTime, 1000);
    }

    function createGameScreen(): void {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = <string>formData.get("background")?.toString();
    
        // set css rules for colors, text size and font to their desginated values from formData
        // according to the Activity Diagram.
        // Implementation not possible due to lack of time and knowledge, but theoretically possible

        timer = document.createElement("span");
        timer.id = "timer"
        timer.innerHTML = prepTime.toString();

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.appendChild(gameField);
        body.appendChild(timer);

        sequence = word.split("");
        let randomSequence: string[] = [...sequence];

        for (let i = 0; i < sequence.length; i++) {
            let span: HTMLSpanElement = document.createElement("span");
            let random: number = Math.floor(Math.random() * randomSequence.length);
            console.log(random);

            span.id = (randomSequence.splice(random, 1)).join();
            span.innerHTML = span.id;
            span.classList.add("front")
            gameField.appendChild(span);
        }
    }

    function handleTime(): void {
        if (gameOn == true) {
            if (gameTime == 0) {
                endGame();
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
        timer.innerHTML = gameTime.toString();
    }

    function turnCard(_event: PointerEvent): void {
        let card: HTMLElement = <HTMLElement>_event.target;
        
        if (card.classList.contains("back") == false) {
            return;
        }

        card.classList.remove("back");
        card.classList.add("front");
        card.innerHTML = card.id;

        if (card.id != sequence[streak]) {
            sendFalseFeedback();
            return;
        }
        streak++;
        if (streak == sequence.length) {
            clearInterval(countDown);
            correctFeedback.classList.remove("hidden");
            gameField.removeEventListener("pointerdown", turnCard);
        }
    }

    function sendFalseFeedback(): void {
        wrongFeedback.classList.remove("hidden");
        gameField.removeEventListener("pointerdown", turnCard);
        streak = 0;
    
        setTimeout(function(): void {
            wrongFeedback.classList.add("hidden");
            gameField.addEventListener("pointerdown", turnCard);
            for (let i = 0; i < gameField.childElementCount; i++) {
                gameField.children[i].innerHTML = " ";
                gameField.children[i].classList.remove("front");
                gameField.children[i].classList.add("back");         
            }
        }
        , 2000 )
    }

    function endGame(): void {
        clearInterval(countDown);
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(gameField);
        body.removeChild(timer);
        let gameOver: HTMLHeadingElement = document.createElement("h2");
        gameOver.innerHTML = "Die Zeit ist um! Du hast verloren :("
        body.appendChild(gameOver);
    }
}