"use strict";
window.addEventListener("DOMContentLoaded", handleLoad);
let crc2;
function handleLoad(_event) {
    let canvas = document.querySelector("canvas");
    crc2 = canvas.getContext("2d");
    bePog();
}
function bePog() {
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.strokeStyle = "#0000FF";
    crc2.fillStyle = "#FFFF00";
    crc2.fillText("helo", 50, 50);
}
//# sourceMappingURL=script.js.map