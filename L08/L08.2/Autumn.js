"use strict";
/*
Aufgabe: L08.2 Goldener Herbst
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 25.11.21
Quellen: Prof. Jirka Dell'Oro-Friedls Repository
*/
var Autumn;
(function (Autumn) {
    window.addEventListener("load", hndLoad);
    let golden = 0.62;
    let horizon;
    let crc2;
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        horizon = crc2.canvas.height * golden;
        drawBackground();
        // drawMiddleground();
        // drawForeground();
    }
    function drawBackground() {
        let sunPos = { x: calculateRandom(0, crc2.canvas.width), y: calculateRandom(150, horizon - 50) };
        let mountainPos = { x: 0, y: horizon };
        let mountainMin = 50;
        let mountainMax = 200;
        let fogPos = { x: 0, y: horizon };
        drawSky();
        drawSun(sunPos);
        drawMountains(mountainPos, mountainMin, mountainMax);
        drawGround();
        drawFog(fogPos);
        drawTree();
    }
    function calculateRandom(_min, _max) {
        let random = (Math.random() * (_max - _min)) + _min;
        return (random);
    }
    function drawTree() {
        console.log("Tree");
        crc2.translate(200, 600);
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(-30, 0);
        crc2.lineTo(-15, -300);
        crc2.lineTo(15, -300);
        crc2.lineTo(30, 0);
        crc2.closePath();
        crc2.fill();
        crc2.save();
        crc2.translate(0, -250);
        do {
            let y = Math.random() * 250;
            let size = 1 - y / 500;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);
            let colorAngle = Math.random() * 68 + 2;
            let color = "HSLA(" + colorAngle + ", 60%, 50%, 0.5)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }
    function drawGround() {
        let backgroundGradient = crc2.createLinearGradient(0, horizon - 5, 0, crc2.canvas.height);
        backgroundGradient.addColorStop(0, "HSL(122, 25%, 75%)");
        backgroundGradient.addColorStop(.26, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");
        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, horizon - 5, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSky() {
        crc2.fillStyle = "HSL(227, 64%, 32%)";
        crc2.fillRect(0, 0, crc2.canvas.width, horizon);
        let backgroundGradient = crc2.createLinearGradient(0, 0, 0, horizon);
        backgroundGradient.addColorStop(0, "HSLA(240, 32%, 39%, 0%)");
        backgroundGradient.addColorStop(.2, "HSLA(240, 32%, 39%, 50");
        backgroundGradient.addColorStop(.45, "HSL(31, 29%, 60%)");
        backgroundGradient.addColorStop(.6, "HSL(36, 82%, 56%");
        backgroundGradient.addColorStop(.9, "HSL(25, 100%, 49%)");
        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, horizon);
    }
    function drawSun(_pos) {
        console.log("Sun");
        let r1 = 30;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.globalCompositeOperation = "lighten";
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawMountains(_pos, _min, _max) {
        console.log("Mountains");
        let stepMin = 70;
        let stepMax = 160;
        let x = 0;
        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max + 50);
        do {
            x += calculateRandom(stepMin, stepMax);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max + 50);
        gradient.addColorStop(0, "HSL(122, 25%, 75%)");
        gradient.addColorStop(.1, "HSL(340, 6%, 52%)");
        gradient.addColorStop(.3, "HSL(342, 14%, 45%)");
        gradient.addColorStop(.9, "HSL(20, 60%, 44%)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawFog(_pos) {
        console.log("Fog");
        let radiusParticle = 60;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x = 0;
        let stepMin = 10;
        let stepMax = 50;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(200, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(200, 100%, 90%, 0)");
        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.fillStyle = gradient;
        crc2.globalCompositeOperation = "overlay";
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -10 - Math.random() * (20 - 10);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        } while (x < crc2.canvas.width);
        crc2.restore();
    }
})(Autumn || (Autumn = {}));
//# sourceMappingURL=Autumn.js.map