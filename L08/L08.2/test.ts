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
        drawSky();
        drawSun();
        drawMountains();
        drawGround();
        drawFog();
    }

    function drawGround(): void {
        let backgroundGradient: CanvasGradient = crc2.createLinearGradient(0, crc2.canvas.height * golden, 0, crc2.canvas.height);

        backgroundGradient.addColorStop(0, "HSL(122, 25%, 75%)");
        backgroundGradient.addColorStop(.26, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");


        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0,  crc2.canvas.height * golden, crc2.canvas.width, crc2.canvas.height);
        
       
    }

    function drawSky(): void {
        crc2.fillStyle = "HSL(227, 64%, 32%)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);

        let backgroundGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height * golden);

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

    function drawSun(): void {
        console.log("Sun");

        let r1: number = 30;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");

        crc2.save();

        let x: number = Math.random() * crc2.canvas.width;
        let y: number = (Math.random() * 150 * golden) + 200;
        crc2.translate(x, y);

        crc2.globalCompositeOperation = "lighten";
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(): void {
        console.log("Mountains");
        let stepMin: number = 70;
        let stepMax: number = 160;
        let x: number = 0;

        crc2.save();
        crc2.translate(0, crc2.canvas.height * golden);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -150);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = - 50 - Math.random() * (200 - 50);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -150);
        
        gradient.addColorStop(0, "HSL(122, 25%, 75%)");
        gradient.addColorStop(.1, "HSL(340, 6%, 52%)");
        gradient.addColorStop(.3, "HSL(342, 14%, 45%)");
        gradient.addColorStop(.9, "HSL(20, 60%, 44%)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    function drawFog(): void {
        console.log("Fog");

        let nParticles: number = 40;
        let radiusParticle: number = 60;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.3)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(0, (crc2.canvas.height * golden) - 15);
        crc2.fillStyle = gradient;
        crc2.globalCompositeOperation = "overlay";


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            let x: number = (Math.random() * 50) + 0.5;
            let y: number = Math.random() * 3;
            if (y > 2) {
                y = -y;
            }
            crc2.translate(x, y);
            crc2.fill(particle);
        }
        crc2.restore();
    }

}