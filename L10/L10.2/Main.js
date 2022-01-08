"use strict";
/*
Aufgabe: L10.2 Goldener Herbst
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 08.01.22
Quellen: ich selbst
*/
var AutumnMoveables;
(function (AutumnMoveables) {
    window.addEventListener("load", hndLoad);
    let golden = 0.62;
    let horizon;
    let background;
    let leaves = [];
    let squirrels = [];
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        AutumnMoveables.crc2 = canvas.getContext("2d");
        horizon = AutumnMoveables.crc2.canvas.height * golden;
        let nLeaves = calculateRandom(5, 15);
        for (let i = 0; i < nLeaves; i++) {
            let leaf = new AutumnMoveables.Leaf;
            leaves.push(leaf);
        }
        let nSquirrels = calculateRandom(1, 5);
        for (let i = 0; i < nSquirrels; i++) {
            let squirrel = new AutumnMoveables.Squirrel;
            squirrels.push(squirrel);
        }
        drawBackground();
        background = AutumnMoveables.crc2.getImageData(0, 0, AutumnMoveables.crc2.canvas.width, AutumnMoveables.crc2.canvas.height);
        window.setInterval(update, 50);
    }
    function drawBackground() {
        let sunPos = new AutumnMoveables.Vector(calculateRandom(AutumnMoveables.crc2.canvas.width * 0.2, AutumnMoveables.crc2.canvas.width * 0.8), calculateRandom(150, horizon - 100));
        let mountainPos = new AutumnMoveables.Vector(0, horizon);
        let mountainMin = 50;
        let mountainMax = 200;
        let fogPos = new AutumnMoveables.Vector(0, horizon);
        drawSky();
        drawSun(sunPos);
        drawMountains(mountainPos, mountainMin, mountainMax);
        drawGround();
        drawFog(fogPos);
        drawBackgroundTrees();
        drawFrontTrees();
    }
    function update() {
        AutumnMoveables.crc2.putImageData(background, 0, 0);
        drawSquirrels();
        drawLeaves();
    }
    function drawSquirrels() {
        squirrels.sort(function (_a, _b) { return _a.position.y - _b.position.y; });
        for (let squirrel of squirrels) {
            squirrel.skate(1 / 50);
            squirrel.draw();
        }
    }
    function drawLeaves() {
        for (let leaf of leaves) {
            leaf.fall(1 / 50);
            leaf.draw();
        }
    }
    function calculateRandom(_min, _max) {
        let random = (Math.random() * (_max - _min)) + _min;
        return (random);
    }
    AutumnMoveables.calculateRandom = calculateRandom;
    function drawFrontTrees() {
        let scale = 1.2;
        let saturation = 60;
        let lightness = 50;
        AutumnMoveables.crc2.save();
        AutumnMoveables.crc2.translate(AutumnMoveables.crc2.canvas.width * calculateRandom(0.01, 0.1), AutumnMoveables.crc2.canvas.height - 25);
        AutumnMoveables.crc2.scale(scale, scale);
        drawTree(saturation, lightness);
        AutumnMoveables.crc2.restore();
        AutumnMoveables.crc2.save();
        AutumnMoveables.crc2.translate(AutumnMoveables.crc2.canvas.width * calculateRandom(0.9, 0.99), AutumnMoveables.crc2.canvas.height - 25);
        AutumnMoveables.crc2.scale(scale, scale);
        drawTree(saturation, lightness);
        AutumnMoveables.crc2.restore();
    }
    function drawBackgroundTrees() {
        let y = horizon;
        let stepMin = 2;
        let stepMax = 8;
        let scale = 0.1;
        let saturation = 30;
        let lightness = 70;
        do {
            y += calculateRandom(stepMin, stepMax);
            AutumnMoveables.crc2.save();
            let x = calculateRandom(0, AutumnMoveables.crc2.canvas.width);
            AutumnMoveables.crc2.translate(x, y);
            AutumnMoveables.crc2.scale(scale, scale);
            drawTree(saturation, lightness);
            saturation += 0.7;
            lightness += -0.7;
            scale += 0.015;
            AutumnMoveables.crc2.restore();
        } while (y < AutumnMoveables.crc2.canvas.height - 110);
        AutumnMoveables.crc2.restore();
    }
    function drawTree(_sat, _light) {
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        AutumnMoveables.crc2.fillStyle = "hsl(25, " + (_sat - 15) + "%, " + (_light - 25) + "%)";
        AutumnMoveables.crc2.beginPath();
        AutumnMoveables.crc2.moveTo(-30, 0);
        AutumnMoveables.crc2.lineTo(-15, -300);
        AutumnMoveables.crc2.lineTo(15, -300);
        AutumnMoveables.crc2.lineTo(30, 0);
        AutumnMoveables.crc2.closePath();
        AutumnMoveables.crc2.fill();
        AutumnMoveables.crc2.save();
        AutumnMoveables.crc2.translate(0, -250);
        let theme = calculateRandom(0, 1);
        do {
            let y = calculateRandom(0, 300);
            let size = 1 - y / 600;
            let x = (Math.random() - 0.5) * 250;
            AutumnMoveables.crc2.save();
            AutumnMoveables.crc2.translate(0, -y);
            AutumnMoveables.crc2.scale(size, size);
            AutumnMoveables.crc2.translate(x, 0);
            let hue;
            let color;
            if (theme > 0.3) {
                hue = calculateRandom(0, 70);
                color = "HSLA(" + hue + ", " + _sat + "%, " + _light + "%, 0.6)";
            }
            else {
                hue = calculateRandom(50, 120);
                color = "HSLA(" + hue + ", " + _sat + "%, " + (_light - 16) + "%, 0.6)";
            }
            AutumnMoveables.crc2.fillStyle = color;
            AutumnMoveables.crc2.fill(branch);
            AutumnMoveables.crc2.restore();
        } while (--nBranches > 0);
        AutumnMoveables.crc2.restore();
    }
    function drawGround() {
        let backgroundGradient = AutumnMoveables.crc2.createLinearGradient(0, horizon - 5, 0, AutumnMoveables.crc2.canvas.height);
        backgroundGradient.addColorStop(0, "HSL(122, 25%, 75%)");
        backgroundGradient.addColorStop(.26, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");
        AutumnMoveables.crc2.fillStyle = backgroundGradient;
        AutumnMoveables.crc2.fillRect(0, horizon - 5, AutumnMoveables.crc2.canvas.width, AutumnMoveables.crc2.canvas.height);
    }
    function drawSky() {
        AutumnMoveables.crc2.fillStyle = "HSL(227, 64%, 32%)";
        AutumnMoveables.crc2.fillRect(0, 0, AutumnMoveables.crc2.canvas.width, horizon);
        let backgroundGradient = AutumnMoveables.crc2.createLinearGradient(0, 0, 0, horizon);
        backgroundGradient.addColorStop(0, "HSLA(240, 32%, 39%, 0%)");
        backgroundGradient.addColorStop(.2, "HSLA(240, 32%, 39%, 50");
        backgroundGradient.addColorStop(.45, "HSL(31, 29%, 60%)");
        backgroundGradient.addColorStop(.6, "HSL(36, 82%, 56%");
        backgroundGradient.addColorStop(.9, "HSL(25, 100%, 49%)");
        AutumnMoveables.crc2.fillStyle = backgroundGradient;
        AutumnMoveables.crc2.fillRect(0, 0, AutumnMoveables.crc2.canvas.width, horizon);
    }
    function drawSun(_pos) {
        console.log("Sun");
        let r1 = 30;
        let r2 = 120;
        let gradient = AutumnMoveables.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        AutumnMoveables.crc2.save();
        AutumnMoveables.crc2.translate(_pos.x, _pos.y);
        AutumnMoveables.crc2.globalCompositeOperation = "lighten";
        AutumnMoveables.crc2.fillStyle = gradient;
        AutumnMoveables.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        AutumnMoveables.crc2.fill();
        AutumnMoveables.crc2.restore();
    }
    function drawMountains(_pos, _min, _max) {
        console.log("Mountains");
        let stepMin = 70;
        let stepMax = 160;
        let x = 0;
        AutumnMoveables.crc2.save();
        AutumnMoveables.crc2.translate(_pos.x, _pos.y);
        AutumnMoveables.crc2.beginPath();
        AutumnMoveables.crc2.moveTo(0, 0);
        AutumnMoveables.crc2.lineTo(0, -_max + 50);
        do {
            x += calculateRandom(stepMin, stepMax);
            let y = -_min - Math.random() * (_max - _min);
            AutumnMoveables.crc2.lineTo(x, y);
        } while (x < AutumnMoveables.crc2.canvas.width);
        AutumnMoveables.crc2.lineTo(x, 0);
        AutumnMoveables.crc2.closePath();
        let gradient = AutumnMoveables.crc2.createLinearGradient(0, 0, 0, -_max + 50);
        gradient.addColorStop(0, "HSL(122, 25%, 75%)");
        gradient.addColorStop(.1, "HSL(340, 6%, 52%)");
        gradient.addColorStop(.3, "HSL(342, 14%, 45%)");
        gradient.addColorStop(.9, "HSL(20, 60%, 44%)");
        AutumnMoveables.crc2.fillStyle = gradient;
        AutumnMoveables.crc2.fill();
        AutumnMoveables.crc2.restore();
    }
    function drawFog(_pos) {
        console.log("Fog");
        let radiusParticle = 60;
        let particle = new Path2D();
        let gradient = AutumnMoveables.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x = 0;
        let stepMin = 10;
        let stepMax = 50;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(200, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(200, 100%, 90%, 0)");
        AutumnMoveables.crc2.save();
        AutumnMoveables.crc2.translate(_pos.x, _pos.y);
        AutumnMoveables.crc2.fillStyle = gradient;
        AutumnMoveables.crc2.globalCompositeOperation = "overlay";
        do {
            x += calculateRandom(stepMin, stepMax);
            let y = -10 - Math.random() * (20 - 10);
            AutumnMoveables.crc2.save();
            AutumnMoveables.crc2.translate(x, y);
            AutumnMoveables.crc2.fill(particle);
            AutumnMoveables.crc2.restore();
        } while (x < AutumnMoveables.crc2.canvas.width);
        AutumnMoveables.crc2.restore();
    }
})(AutumnMoveables || (AutumnMoveables = {}));
//# sourceMappingURL=Main.js.map