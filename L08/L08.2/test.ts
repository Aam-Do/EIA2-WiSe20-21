namespace Test {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", hndLoad);
    let golden: number = 0.62;

    let crc2: CanvasRenderingContext2D;

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        drawBackground();
        drawSun();
        drawMountains();
        drawCloud();
    }

    function drawBackground(): void {
        crc2.fillStyle = "HSL(209, 87%, 65%)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);

        crc2.save();

        let backgroundGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height * golden);

        backgroundGradient.addColorStop(0, "HSLA(45, 70%, 72%, 0%)");
        backgroundGradient.addColorStop(.35, "HSLA(315, 100%, 70%, 0.3");
        backgroundGradient.addColorStop(.7, "HSL(33, 100%, 70%)");

        crc2.globalCompositeOperation = "";
        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);

        crc2.restore();
        // backgroundGradient.addColorStop(1, "HSL(122, 30%, 81%)");
        // backgroundGradient.addColorStop(.8, "HSL(98, 22%, 45%)");
        // backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");

    }

    function drawSun(): void {
        console.log("Sun");

        let r1: number = 30;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");

        crc2.save();

        let x: number = Math.random() * crc2.canvas.width;
        let y: number = (Math.random() * 200 * golden) + 50;
        crc2.translate(x, y);

        crc2.globalCompositeOperation = "lighten";
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(): void {
        console.log("Mountains");
        let stepMin: number = 30;
        let stepMax: number = 80;
        let x: number = 0;

        crc2.save();
        crc2.translate(0, crc2.canvas.height * golden);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -150);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = - 50 - Math.random() * (150 - 50);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - 150);
        gradient.addColorStop(0, "lightgrey");
        gradient.addColorStop(0.7, "darkgrey");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    function drawCloud(): void {
        console.log("Cloud");

        let nParticles: number = 50;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.3)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(0, (crc2.canvas.height * golden) - 20);
        crc2.fillStyle = gradient;
        crc2.globalCompositeOperation = "overlay";


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            let x: number = (Math.random() * 50) + 0.5;
            let y: number = Math.random();
            crc2.translate(x, y);
            crc2.fill(particle);
        }
        crc2.restore();
    }

}