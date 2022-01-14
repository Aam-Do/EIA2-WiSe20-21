"use strict";
/*
Aufgabe: L11.1 Goldener Herbst
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 13.01.22
Quellen: ich selbst
*/
var AutumnNuts;
(function (AutumnNuts) {
    window.addEventListener("load", hndLoad);
    let golden = 0.62;
    let horizon;
    let background;
    AutumnNuts.actives = [];
    let passives = [];
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.addEventListener("pointerdown", hndClick);
        document.addEventListener("eat", hndEat);
        AutumnNuts.crc2 = canvas.getContext("2d");
        horizon = AutumnNuts.crc2.canvas.height * golden;
        let nSquirrels = calculateRandom(1, 5);
        for (let i = 0; i < nSquirrels; i++) {
            let squirrel = new AutumnNuts.Squirrel;
            AutumnNuts.actives.push(squirrel);
        }
        let nLeaves = calculateRandom(5, 15);
        for (let i = 0; i < nLeaves; i++) {
            let leaf = new AutumnNuts.Leaf;
            passives.push(leaf);
        }
        drawBackground();
        background = AutumnNuts.crc2.getImageData(0, 0, AutumnNuts.crc2.canvas.width, AutumnNuts.crc2.canvas.height);
        window.setInterval(update, 50);
    }
    function hndEat(_event) {
        let nut = _event.detail.nut;
        let index = AutumnNuts.actives.indexOf(nut);
        AutumnNuts.actives.splice(index, 1);
        squirrelsSearch();
    }
    function squirrelsSearch() {
        let squirrel;
        for (let active of AutumnNuts.actives) {
            if (active instanceof AutumnNuts.Squirrel == true) {
                squirrel = active;
                squirrel.search();
            }
        }
    }
    function hndClick(_event) {
        let target = _event.target;
        let rect = target.getBoundingClientRect();
        let scaling = new AutumnNuts.Vector(AutumnNuts.crc2.canvas.height / rect.height, AutumnNuts.crc2.canvas.width / rect.width);
        let pointer = new AutumnNuts.Vector((_event.clientX - rect.left) * scaling.x, (_event.clientY - rect.top) * scaling.x);
        if (pointer.x > AutumnNuts.crc2.canvas.width * 0.75 || pointer.y > AutumnNuts.crc2.canvas.height - 20 || pointer.x < AutumnNuts.crc2.canvas.width * 0.15 || pointer.y < AutumnNuts.crc2.canvas.height - 100) {
            console.log("You have to click inside the squirrel area!");
        }
        else {
            console.log("You placed a nut!");
            AutumnNuts.actives.unshift(new AutumnNuts.Nut(pointer));
            squirrelsSearch();
        }
    }
    function drawBackground() {
        let sunPos = new AutumnNuts.Vector(calculateRandom(AutumnNuts.crc2.canvas.width * 0.2, AutumnNuts.crc2.canvas.width * 0.8), calculateRandom(150, horizon - 100));
        let mountainPos = new AutumnNuts.Vector(0, horizon);
        let mountainMin = 50;
        let mountainMax = 200;
        let fogPos = new AutumnNuts.Vector(0, horizon);
        drawSky();
        drawSun(sunPos);
        drawMountains(mountainPos, mountainMin, mountainMax);
        drawGround();
        drawFog(fogPos);
        drawBackgroundTrees();
        drawFrontTrees();
    }
    function update() {
        AutumnNuts.crc2.putImageData(background, 0, 0);
        AutumnNuts.actives.sort(function (_a, _b) { return _a.position.y - _b.position.y; });
        for (let active of AutumnNuts.actives) {
            active.move(1 / 50);
            active.draw();
        }
        for (let passive of passives) {
            passive.move(1 / 50);
            passive.draw();
        }
    }
    function calculateRandom(_min, _max) {
        let random = (Math.random() * (_max - _min)) + _min;
        return (random);
    }
    AutumnNuts.calculateRandom = calculateRandom;
    function drawFrontTrees() {
        let scale = 1.2;
        let saturation = 60;
        let lightness = 50;
        AutumnNuts.crc2.save();
        AutumnNuts.crc2.translate(AutumnNuts.crc2.canvas.width * calculateRandom(0.01, 0.1), AutumnNuts.crc2.canvas.height - 25);
        AutumnNuts.crc2.scale(scale, scale);
        drawTree(saturation, lightness);
        AutumnNuts.crc2.restore();
        AutumnNuts.crc2.save();
        AutumnNuts.crc2.translate(AutumnNuts.crc2.canvas.width * calculateRandom(0.9, 0.99), AutumnNuts.crc2.canvas.height - 25);
        AutumnNuts.crc2.scale(scale, scale);
        drawTree(saturation, lightness);
        AutumnNuts.crc2.restore();
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
            AutumnNuts.crc2.save();
            let x = calculateRandom(0, AutumnNuts.crc2.canvas.width);
            AutumnNuts.crc2.translate(x, y);
            AutumnNuts.crc2.scale(scale, scale);
            drawTree(saturation, lightness);
            saturation += 0.7;
            lightness += -0.7;
            scale += 0.015;
            AutumnNuts.crc2.restore();
        } while (y < AutumnNuts.crc2.canvas.height - 110);
        AutumnNuts.crc2.restore();
    }
    function drawTree(_sat, _light) {
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        AutumnNuts.crc2.fillStyle = "hsl(25, " + (_sat - 15) + "%, " + (_light - 25) + "%)";
        AutumnNuts.crc2.beginPath();
        AutumnNuts.crc2.moveTo(-30, 0);
        AutumnNuts.crc2.lineTo(-15, -300);
        AutumnNuts.crc2.lineTo(15, -300);
        AutumnNuts.crc2.lineTo(30, 0);
        AutumnNuts.crc2.closePath();
        AutumnNuts.crc2.fill();
        AutumnNuts.crc2.save();
        AutumnNuts.crc2.translate(0, -250);
        let theme = calculateRandom(0, 1);
        do {
            let y = calculateRandom(0, 300);
            let size = 1 - y / 600;
            let x = (Math.random() - 0.5) * 250;
            AutumnNuts.crc2.save();
            AutumnNuts.crc2.translate(0, -y);
            AutumnNuts.crc2.scale(size, size);
            AutumnNuts.crc2.translate(x, 0);
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
            AutumnNuts.crc2.fillStyle = color;
            AutumnNuts.crc2.fill(branch);
            AutumnNuts.crc2.restore();
        } while (--nBranches > 0);
        AutumnNuts.crc2.restore();
    }
    function drawGround() {
        let backgroundGradient = AutumnNuts.crc2.createLinearGradient(0, horizon - 5, 0, AutumnNuts.crc2.canvas.height);
        backgroundGradient.addColorStop(0, "HSL(122, 25%, 75%)");
        backgroundGradient.addColorStop(.26, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");
        AutumnNuts.crc2.fillStyle = backgroundGradient;
        AutumnNuts.crc2.fillRect(0, horizon - 5, AutumnNuts.crc2.canvas.width, AutumnNuts.crc2.canvas.height);
    }
    function drawSky() {
        AutumnNuts.crc2.fillStyle = "HSL(227, 64%, 32%)";
        AutumnNuts.crc2.fillRect(0, 0, AutumnNuts.crc2.canvas.width, horizon);
        let backgroundGradient = AutumnNuts.crc2.createLinearGradient(0, 0, 0, horizon);
        backgroundGradient.addColorStop(0, "HSLA(240, 32%, 39%, 0%)");
        backgroundGradient.addColorStop(.2, "HSLA(240, 32%, 39%, 50");
        backgroundGradient.addColorStop(.45, "HSL(31, 29%, 60%)");
        backgroundGradient.addColorStop(.6, "HSL(36, 82%, 56%");
        backgroundGradient.addColorStop(.9, "HSL(25, 100%, 49%)");
        AutumnNuts.crc2.fillStyle = backgroundGradient;
        AutumnNuts.crc2.fillRect(0, 0, AutumnNuts.crc2.canvas.width, horizon);
    }
    function drawSun(_pos) {
        console.log("Sun");
        let r1 = 30;
        let r2 = 120;
        let gradient = AutumnNuts.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        AutumnNuts.crc2.save();
        AutumnNuts.crc2.translate(_pos.x, _pos.y);
        AutumnNuts.crc2.globalCompositeOperation = "lighten";
        AutumnNuts.crc2.fillStyle = gradient;
        AutumnNuts.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        AutumnNuts.crc2.fill();
        AutumnNuts.crc2.restore();
    }
    function drawMountains(_pos, _min, _max) {
        console.log("Mountains");
        let stepMin = 70;
        let stepMax = 160;
        let x = 0;
        AutumnNuts.crc2.save();
        AutumnNuts.crc2.translate(_pos.x, _pos.y);
        AutumnNuts.crc2.beginPath();
        AutumnNuts.crc2.moveTo(0, 0);
        AutumnNuts.crc2.lineTo(0, -_max + 50);
        do {
            x += calculateRandom(stepMin, stepMax);
            let y = -_min - Math.random() * (_max - _min);
            AutumnNuts.crc2.lineTo(x, y);
        } while (x < AutumnNuts.crc2.canvas.width);
        AutumnNuts.crc2.lineTo(x, 0);
        AutumnNuts.crc2.closePath();
        let gradient = AutumnNuts.crc2.createLinearGradient(0, 0, 0, -_max + 50);
        gradient.addColorStop(0, "HSL(122, 25%, 75%)");
        gradient.addColorStop(.1, "HSL(340, 6%, 52%)");
        gradient.addColorStop(.3, "HSL(342, 14%, 45%)");
        gradient.addColorStop(.9, "HSL(20, 60%, 44%)");
        AutumnNuts.crc2.fillStyle = gradient;
        AutumnNuts.crc2.fill();
        AutumnNuts.crc2.restore();
    }
    function drawFog(_pos) {
        console.log("Fog");
        let radiusParticle = 60;
        let particle = new Path2D();
        let gradient = AutumnNuts.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x = 0;
        let stepMin = 10;
        let stepMax = 50;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(200, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(200, 100%, 90%, 0)");
        AutumnNuts.crc2.save();
        AutumnNuts.crc2.translate(_pos.x, _pos.y);
        AutumnNuts.crc2.fillStyle = gradient;
        AutumnNuts.crc2.globalCompositeOperation = "overlay";
        do {
            x += calculateRandom(stepMin, stepMax);
            let y = -10 - Math.random() * (20 - 10);
            AutumnNuts.crc2.save();
            AutumnNuts.crc2.translate(x, y);
            AutumnNuts.crc2.fill(particle);
            AutumnNuts.crc2.restore();
        } while (x < AutumnNuts.crc2.canvas.width);
        AutumnNuts.crc2.restore();
    }
})(AutumnNuts || (AutumnNuts = {}));
//# sourceMappingURL=Main.js.map