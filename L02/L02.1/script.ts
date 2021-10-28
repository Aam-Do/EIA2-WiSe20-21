namespace L02EventInspector {

    let body: HTMLBodyElement;
    let div0: HTMLDivElement;
    let div1: HTMLDivElement;
    let span: HTMLSpanElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", handleMouseMove);

        body = document.querySelector("body");
        div0 = document.querySelector("#div0");
        div1 = document.querySelector("#div1");
        span = document.querySelector("span");

        document.addEventListener("click", handleClick);
        document.addEventListener("keyup", handleKeyUp);

        body.addEventListener("click", handleClick);
        body.addEventListener("keyup", handleKeyUp);

        div0.addEventListener("click", handleClick);
        div0.addEventListener("keyup", handleKeyUp);

        div1.addEventListener("click", handleClick);
        div1.addEventListener("keyup", handleKeyUp);
    }

    function handleMouseMove(_event: MouseEvent): void {
        setInfoBox(_event);
    }

    function setInfoBox(_event: MouseEvent): void {
        span.innerHTML = "Position: x = " + _event.clientX + ", y = " + _event.clientY;
        span.style.top = (_event.clientY + 12) + "px";
        span.style.left = (_event.clientX + 8) + "px";
    }

    function handleClick(_event: MouseEvent): void {
        logInfo(_event);
    }

    function handleKeyUp(_event: Event): void {
        logInfo(_event);
    }

    function logInfo(_event: Event): void {
        console.group("Event Infos");
        console.log("Event type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log("Event object: " + _event)
        console.groupEnd();
    }
}