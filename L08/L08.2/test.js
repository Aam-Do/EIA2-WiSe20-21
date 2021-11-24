"use strict";
var Test;
(function (Test) {
    window.addEventListener("load", hndLoad);
    let golden = 0.62;
    let crc2;
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawMountains();
        drawGround();
        drawFog();
    }
    function drawGround() {
        let backgroundGradient = crc2.createLinearGradient(0, crc2.canvas.height * golden, 0, crc2.canvas.height);
        backgroundGradient.addColorStop(0, "HSL(122, 25%, 75%)");
        backgroundGradient.addColorStop(.26, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");
        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, crc2.canvas.height * golden, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSky() {
        crc2.fillStyle = "HSL(227, 64%, 32%)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);
        let backgroundGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height * golden);
        backgroundGradient.addColorStop(0, "HSLA(240, 32%, 39%, 0%)");
        backgroundGradient.addColorStop(.2, "HSLA(240, 32%, 39%, 50");
        backgroundGradient.addColorStop(.45, "HSL(31, 29%, 60%)");
        backgroundGradient.addColorStop(.6, "HSL(36, 82%, 56%");
        backgroundGradient.addColorStop(.9, "HSL(25, 100%, 49%)");
        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);
        // backgroundGradient.addColorStop(1, "HSL(122, 30%, 81%)");
        // backgroundGradient.addColorStop(.8, "HSL(98, 22%, 45%)");
        // backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");
    }
    function drawSun() {
        console.log("Sun");
        let r1 = 30;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        crc2.save();
        let x = Math.random() * crc2.canvas.width;
        let y = (Math.random() * 150 * golden) + 200;
        crc2.translate(x, y);
        crc2.globalCompositeOperation = "lighten";
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawMountains() {
        console.log("Mountains");
        let stepMin = 70;
        let stepMax = 160;
        let x = 0;
        crc2.save();
        crc2.translate(0, crc2.canvas.height * golden);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -150);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -50 - Math.random() * (200 - 50);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -150);
        gradient.addColorStop(0, "HSL(122, 25%, 75%)");
        gradient.addColorStop(.1, "HSL(340, 6%, 52%)");
        gradient.addColorStop(.3, "HSL(342, 14%, 45%)");
        gradient.addColorStop(.9, "HSL(20, 60%, 44%)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawFog() {
        console.log("Fog");
        let nParticles = 40;
        let radiusParticle = 60;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.3)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(0, (crc2.canvas.height * golden) - 15);
        crc2.fillStyle = gradient;
        crc2.globalCompositeOperation = "overlay";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() * 50) + 0.5;
            let y = Math.random() * 3;
            if (y > 2) {
                y = -y;
            }
            crc2.translate(x, y);
            crc2.fill(particle);
        }
        crc2.restore();
    }
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map