var L02EventInspector;
(function (L02EventInspector) {
    var body;
    var div0;
    var div1;
    var span;
    var button;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", handleMouseMove);
        body = document.querySelector("body");
        div0 = document.querySelector("#div0");
        div1 = document.querySelector("#div1");
        span = document.querySelector("span");
        button = document.querySelector("button");
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
    function handleMouseMove(_event) {
        setInfoBox(_event);
    }
    function setInfoBox(_event) {
        span.innerHTML = "Position: x = " + _event.clientX + ", y = " + _event.clientY + "<br>" + "Event target: " + _event.target;
        span.style.top = (_event.clientY + 12) + "px";
        span.style.left = (_event.clientX + 8) + "px";
    }
    function handleClick(_event) {
        logInfo(_event);
    }
    function handleKeyUp(_event) {
        logInfo(_event);
    }
    function logInfo(_event) {
        console.group("Event Infos");
        console.log("Event type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log("Event object: " + _event);
        console.groupEnd();
    }
    function handleButtonClick(_event) {
        var buttonEvent = new CustomEvent("buttonClick", { bubbles: true });
        button.dispatchEvent(buttonEvent);
    }
    function handleButtonBubble(_event) {
        console.log(_event);
    }
})(L02EventInspector || (L02EventInspector = {}));
//# sourceMappingURL=script.js.map