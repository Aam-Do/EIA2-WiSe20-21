/*
Aufgabe: L08.2 Goldener Herbst
Name: Amélie Dell'Oro
Matrikel: 268339
Datum: 25.11.21
Quellen: Prof. Jirka Dell'Oro-Friedls Repository
*/

namespace Autumn {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", hndLoad);
    let golden: number = 0.62;
    let horizon: number;

    let crc2: CanvasRenderingContext2D;

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        horizon = crc2.canvas.height * golden;

        drawBackground();
        // drawMiddleground();
        drawForeground();
    }

    function drawBackground(): void {
        let sunPos: Vector = { x: calculateRandom(0, crc2.canvas.width), y: calculateRandom(150, horizon - 50) }
        let mountainPos: Vector = { x: 0, y: horizon };
        let mountainMin: number = 50;
        let mountainMax: number = 200;
        let fogPos: Vector = { x: 0, y: horizon };

        drawSky();
        drawSun(sunPos);
        drawMountains(mountainPos, mountainMin, mountainMax);
        drawGround();
        drawFog(fogPos);
        drawBackgroundTrees();
        drawFrontTrees();
    }

    function drawForeground(): void {
        drawLeaves();
    }

    function drawLeaves(): void {
        let nLeaves: number = calculateRandom(3, 15);

        for (let i: number = 0; i < nLeaves; i++) {
            let x: number = calculateRandom(0, crc2.canvas.width);
            let y: number = calculateRandom(0, crc2.canvas.height);
            crc2.save();
            crc2.translate(x, y);
            crc2.scale(calculateRandom(0.1, 0.6), calculateRandom(0.1, 0.6));
            crc2.rotate(calculateRandom(0, 360));
            let type: number = Math.round(calculateRandom(1, 3));
            drawLeaf(type);
            crc2.restore();
        }
    }

    function drawLeaf(_type: number): void {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, 100);
        crc2.lineTo(10, 100);
        crc2.closePath();
        crc2.fillStyle = "hsl(25, 35%, 25%)";
        crc2.fill();

        let gradient: CanvasGradient = crc2.createLinearGradient(-150, 20, 150, -20);
        gradient.addColorStop(0, "hsl(" + calculateRandom(0, 60) + ", 75%, 50%)");
        gradient.addColorStop(1, "hsl(" + calculateRandom(50, 100) + ", 70%, 40%)");
        crc2.fillStyle = gradient;

        switch (_type) {
            case 1:
                drawMapleLeaf();
                break;
            case 2:
                drawRoundLeaf();
                break;
            default:
                drawPointyLeaf();
        }
    }

    function drawPointyLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.quadraticCurveTo(25, 25, 100, 25);
        crc2.quadraticCurveTo(75, -25, 50, -25);
        crc2.quadraticCurveTo(75, -50, 75, -125);
        crc2.quadraticCurveTo(0, -100, 25, -75);
        crc2.quadraticCurveTo(25, -125, 0, -200);
        crc2.quadraticCurveTo(-25, -100, -25, -75);
        crc2.quadraticCurveTo(0, -125, -75, -125);
        crc2.quadraticCurveTo(-75, -50, -50, -25);
        crc2.quadraticCurveTo(-75, -25, -100, 25);
        crc2.quadraticCurveTo(-25, 25, 0, 5);
        crc2.closePath();
        crc2.fill();
    }

    function drawRoundLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.bezierCurveTo(125, -50, 25, -150, 0, -200);
        crc2.bezierCurveTo(-25, -150, -125, -50, 0, 5);
        crc2.closePath();
        crc2.fill();
    }

    function drawMapleLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.lineTo(40, 50);
        crc2.lineTo(50, 30);
        crc2.lineTo(100, 50);
        crc2.lineTo(90, 30);
        crc2.lineTo(125, 20);
        crc2.lineTo(50, -30);
        crc2.lineTo(140, -50);
        crc2.lineTo(125, -75);
        crc2.lineTo(150, -100);
        crc2.lineTo(100, -110);
        crc2.lineTo(110, -125);
        crc2.lineTo(40, -100);
        crc2.lineTo(60, -165);
        crc2.lineTo(30, -150);
        crc2.lineTo(0, -200);
        crc2.lineTo(-30, -150);
        crc2.lineTo(-60, -165);
        crc2.lineTo(-40, -100);
        crc2.lineTo(-110, -125);
        crc2.lineTo(-100, -110);
        crc2.lineTo(-150, -100);
        crc2.lineTo(-125, -75);
        crc2.lineTo(-140, -50);
        crc2.lineTo(-50, -30);
        crc2.lineTo(-125, 20);
        crc2.lineTo(-90, 30);
        crc2.lineTo(-100, 50);
        crc2.lineTo(-50, 30);
        crc2.lineTo(-40, 50);
        crc2.closePath();
        crc2.fill();
    }

    function calculateRandom(_min: number, _max: number): number {
        let random: number = (Math.random() * (_max - _min)) + _min;
        return (random);
    }

    function drawFrontTrees(): void {
        let scale: number = 1.2;
        let saturation: number = 60;
        let lightness: number = 50;

        crc2.save();
        crc2.translate(crc2.canvas.width * calculateRandom(0.1, 0.2), crc2.canvas.height - 20);
        crc2.scale(scale, scale)
        drawTree(saturation, lightness);
        crc2.restore();

        crc2.save();
        crc2.translate(crc2.canvas.width * calculateRandom(0.8, 0.9), crc2.canvas.height - 20);
        crc2.scale(scale, scale);
        drawTree(saturation, lightness);
        crc2.restore();

    }

    function drawBackgroundTrees(): void {
        let y: number = horizon;
        let stepMin: number = 2;
        let stepMax: number = 8;
        let scale: number = 0.1;
        let saturation: number = 30;
        let lightness: number = 70;

        do {
            y += calculateRandom(stepMin, stepMax);
            crc2.save();
            let x: number = calculateRandom(0, crc2.canvas.width);
            crc2.translate(x, y);
            crc2.scale(scale, scale);
            drawTree(saturation, lightness);
            saturation += 0.7;
            lightness += -0.7;
            scale += 0.015;
            crc2.restore();
        } while (y < crc2.canvas.height - 100);

        crc2.restore();
    }

    function drawTree(_sat: number, _light: number): void {
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "hsl(25, " + (_sat - 15) + "%, " + (_light - 25) + "%)";
        crc2.beginPath();
        crc2.moveTo(-30, 0);
        crc2.lineTo(-15, -300);
        crc2.lineTo(15, -300);
        crc2.lineTo(30, 0);
        crc2.closePath();
        crc2.fill();

        crc2.save();
        crc2.translate(0, -250);

        let theme: number = calculateRandom(0, 1);

        do {
            let y: number = calculateRandom(0, 300);
            let size: number = 1 - y / 600;
            let x: number = (Math.random() - 0.5) * 250;

            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);


            let hue: number;
            let color: string;

            if (theme > 0.3) {
                hue = calculateRandom(0, 70);
                color = "HSLA(" + hue + ", " + _sat + "%, " + _light + "%, 0.6)";
            }
            else {
                hue = calculateRandom(50, 120);
                color = "HSLA(" + hue + ", " + _sat + "%, " + (_light - 16) + "%, 0.6)";

            }

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (--nBranches > 0);

        crc2.restore();
    }

    function drawGround(): void {
        let backgroundGradient: CanvasGradient = crc2.createLinearGradient(0, horizon - 5, 0, crc2.canvas.height);

        backgroundGradient.addColorStop(0, "HSL(122, 25%, 75%)");
        backgroundGradient.addColorStop(.26, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");


        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, horizon - 5, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSky(): void {
        crc2.fillStyle = "HSL(227, 64%, 32%)";
        crc2.fillRect(0, 0, crc2.canvas.width, horizon);

        let backgroundGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, horizon);

        backgroundGradient.addColorStop(0, "HSLA(240, 32%, 39%, 0%)");
        backgroundGradient.addColorStop(.2, "HSLA(240, 32%, 39%, 50");
        backgroundGradient.addColorStop(.45, "HSL(31, 29%, 60%)");
        backgroundGradient.addColorStop(.6, "HSL(36, 82%, 56%");
        backgroundGradient.addColorStop(.9, "HSL(25, 100%, 49%)");

        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, horizon);
    }

    function drawSun(_pos: Vector): void {
        console.log("Sun");

        let r1: number = 30;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

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

    function drawMountains(_pos: Vector, _min: number, _max: number): void {
        console.log("Mountains");

        let stepMin: number = 70;
        let stepMax: number = 160;
        let x: number = 0;

        crc2.save();
        crc2.translate(_pos.x, _pos.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, - _max + 50);

        do {
            x += calculateRandom(stepMin, stepMax);
            let y: number = - _min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - _max + 50);

        gradient.addColorStop(0, "HSL(122, 25%, 75%)");
        gradient.addColorStop(.1, "HSL(340, 6%, 52%)");
        gradient.addColorStop(.3, "HSL(342, 14%, 45%)");
        gradient.addColorStop(.9, "HSL(20, 60%, 44%)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawFog(_pos: Vector): void {
        console.log("Fog");

        let radiusParticle: number = 60;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x: number = 0;
        let stepMin: number = 10;
        let stepMax: number = 50;

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(200, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(200, 100%, 90%, 0)");

        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.fillStyle = gradient;
        crc2.globalCompositeOperation = "overlay";

        do {
            x += calculateRandom(stepMin, stepMax);
            let y: number = - 10 - Math.random() * (20 - 10);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        } while (x < crc2.canvas.width);

        crc2.restore();
    }

}