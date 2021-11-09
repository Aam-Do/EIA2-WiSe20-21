namespace L02EventInspector {

    let body: HTMLBodyElement;
    let div0: HTMLDivElement;
    let div1: HTMLDivElement;
    let span: HTMLSpanElement;
    let button: HTMLButtonElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", handleMouseMove);

        body = <HTMLBodyElement>document.querySelector("body");
        div0 = <HTMLDivElement>document.querySelector("#div0");
        div1 = <HTMLDivElement>document.querySelector("#div1");
        span = <HTMLSpanElement>document.querySelector("span");
        button = <HTMLButtonElement>document.querySelector("button");

        document.addEventListener("click", handleClick);
        document.addEventListener("keyup", handleKeyUp);
        document.addEventListener("buttonClick", handleButtonBubble);

        body.addEventListener("click", handleClick);
        body.addEventListener("keyup", handleKeyUp);

        div0.addEventListener("click", handleClick);
        div0.addEventListener("keyup", handleKeyUp);

        div1.addEventListener("click", handleClick);
        div1.addEventListener("keyup", handleKeyUp);

        button.addEventListener("click", handleButtonClick);
    }

    function handleMouseMove(_event: MouseEvent): void {
        setInfoBox(_event);
    }

    function setInfoBox(_event: MouseEvent): void {
        span.innerHTML = "Position: x = " + _event.clientX + ", y = " + _event.clientY + "<br>";
        span.innerHTML += "Event target: " + _event.target;
        span.style.top = (_event.clientY + 12) + "px";
        span.style.left = (_event.clientX + 8) + "px";
    }

    function handleClick(_event: MouseEvent): void {
        if (_event.target == button)
            return;
        logInfo(_event);
    }

    function handleKeyUp(_event: Event): void {
        logInfo(_event);
    }

    function logInfo(_event: Event): void {
        console.group("Event Infos");
        console.log("Event type: " + _event.type);
        console.log("Target: ", _event.target);
        console.log("Current Target: ", _event.currentTarget);
        console.log("Event object: ", _event);
        console.groupEnd();
    }

    function handleButtonClick(_event: MouseEvent): void {
        let buttonEvent: CustomEvent = new CustomEvent("buttonClick", {bubbles: true});
        button.dispatchEvent(buttonEvent);
    }

    function handleButtonBubble(_event: CustomEvent): void {
        console.log(_event);
    }
}