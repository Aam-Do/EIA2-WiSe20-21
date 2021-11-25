"use strict";
var Autumn;
(function (Autumn) {
    window.addEventListener("load", hndLoad);
    let golden = 0.62;
    let horizon;
    let crc2;
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        horizon = crc2.canvas.width * golden;
        drawBackground();
        // drawMiddleground();
        // drawForeground();
    }
    function drawBackground() {
        let sunPosition = { x: calculateRandom(0, crc2.canvas.width), y: calculateRandom(150, horizon - 50) };
        let mountainPosition = { x: 0, y: horizon };
        // drawSky();
        // drawSun();
        // drawMountains();
        // drawGround();
        // drawFog();
    }
    function calculateRandom(_min, _max) {
        let random = (Math.random() * (_max - _min)) + _min;
        return (random);
    }
})(Autumn || (Autumn = {}));
//# sourceMappingURL=Autumn.js.map