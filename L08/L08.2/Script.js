"use strict";
var Art;
(function (Art) {
    window.addEventListener("DOMContentLoaded", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawGradients();
        drawLines();
        drawCircles();
    }
    function drawGradients() {
        let amountOfGradients = Math.round(5 * Math.random() + 1);
        for (let i = 0; i < amountOfGradients; i++) {
            let hue = [];
            let hsl = "hsl(";
            let saturation = ", 77%";
            let light = ", 67%)";
            switch (i) {
                case 0:
                    let backgroundGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                    for (let i = 0; i < 3; i++) {
                        let random = 360 * Math.random();
                        hue.push(random.toString());
                    }
                    backgroundGradient.addColorStop(0, hsl + hue[0] + saturation + light);
                    backgroundGradient.addColorStop(.5, hsl + hue[1] + saturation + light);
                    backgroundGradient.addColorStop(1, hsl + hue[2] + saturation + light);
                    crc2.fillStyle = backgroundGradient;
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                    break;
                case 4:
                case 5:
                    let circleGradient = crc2.createLinearGradient(0, 0, 0, (crc2.canvas.height / 5));
                    for (let i = 0; i < 2; i++) {
                        let random = 360 * Math.random();
                        hue.push(random.toString());
                    }
                    circleGradient.addColorStop(0, hsl + hue[0] + saturation + light);
                    circleGradient.addColorStop(1, hsl + hue[1] + saturation + light);
                    crc2.translate(((crc2.canvas.width) * Math.random()), (crc2.canvas.height * Math.random()));
                    crc2.rotate((320 * Math.random()) * Math.PI / 180);
                    crc2.scale(((2 * Math.random()) + 1), (2 * Math.random()) + 1);
                    crc2.fillStyle = circleGradient;
                    crc2.beginPath();
                    crc2.arc(0, 0, (crc2.canvas.width / 7), 0, 2 * Math.PI);
                    crc2.fill();
                    crc2.resetTransform();
                    break;
                default:
                    let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                    for (let i = 0; i < 3; i++) {
                        let random = 360 * Math.random();
                        hue.push(random.toString());
                    }
                    gradient.addColorStop(0, hsl + hue[0] + saturation + light);
                    gradient.addColorStop(.5, hsl + hue[1] + saturation + light);
                    gradient.addColorStop(1, hsl + hue[2] + saturation + light);
                    crc2.translate(((crc2.canvas.width) * Math.random()), (crc2.canvas.height * Math.random()));
                    crc2.rotate((320 * Math.random()) * Math.PI / 180);
                    crc2.scale(((2 * Math.random()) + 1.5), (2 * Math.random()) + 1.5);
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                    crc2.resetTransform();
            }
        }
    }
    function drawLines() {
        let amountOfLines = Math.round(14 * Math.random()) + 1;
        for (let i = 0; i < amountOfLines; i++) {
            let hue;
            let hsl = "hsl(";
            let saturation = ", 85%";
            let light = ", 50%)";
            hue = (360 * Math.random()).toString();
            crc2.strokeStyle = hsl + hue + saturation + light;
            crc2.beginPath();
            crc2.translate((crc2.canvas.width * Math.random()), (crc2.canvas.height * Math.random()));
            crc2.rotate((320 * Math.random()) * Math.PI / 180);
            crc2.scale(((2 * Math.random()) + 1), (2 * Math.random()));
            crc2.moveTo(-50, 0);
            crc2.lineTo(50, 0);
            crc2.closePath();
            crc2.lineWidth = 4;
            crc2.stroke();
            crc2.resetTransform();
        }
    }
    function drawCircles() {
        let amountOfCircles = Math.round(9 * Math.random()) + 1;
        for (let i = 0; i < amountOfCircles; i++) {
            let hue;
            let hsl = "hsl(";
            let saturation = ", 85%";
            let light = ", 90%, ";
            let alpha;
            hue = (360 * Math.random()).toString();
            alpha = ((0.9 * Math.random()) + 0.1).toString();
            let color = hsl + hue + saturation + light + alpha + ")";
            crc2.strokeStyle = color;
            crc2.fillStyle = color;
            crc2.translate(((crc2.canvas.width) * Math.random()), (crc2.canvas.height * Math.random()));
            let randomScale = ((2 * Math.random()) + 1);
            crc2.scale(randomScale, randomScale);
            crc2.beginPath();
            crc2.arc(0, 0, (crc2.canvas.width / 20), 0, 2 * Math.PI);
            crc2.closePath();
            let circleStyle = Math.round(1 * Math.random());
            switch (circleStyle) {
                case 0:
                    crc2.fill();
                    break;
                default:
                    crc2.stroke();
            }
            crc2.resetTransform();
        }
    }
})(Art || (Art = {}));
//# sourceMappingURL=Script.js.map