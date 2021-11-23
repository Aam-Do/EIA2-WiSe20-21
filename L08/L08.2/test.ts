namespace Test {

    window.addEventListener("load", hndLoad);

    let crc2: CanvasRenderingContext2D;

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        drawGradient();
        drawMountains();
        // drawCircles();
    }

    function drawGradient(): void {
        let backgroundGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        backgroundGradient.addColorStop(0, "HSL(209, 87%, 61%)");
        backgroundGradient.addColorStop(.3, "HSL(45, 70%, 72%)");
        backgroundGradient.addColorStop(.45, "HSL(33, 100%, 60%)");
        backgroundGradient.addColorStop(.62, "HSL(122, 30%, 81%)");
        backgroundGradient.addColorStop(.8, "HSL(98, 22%, 45%)");
        backgroundGradient.addColorStop(1, "HSL(18, 68%, 27%)");

        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawMountains(): void {
        console.log("Mountains");
        let stepMin: number = 30;
        let stepMax: number = 80;
        let x: number = 0;

        crc2.save();
        crc2.translate(0, crc2.canvas.height * 0.62);

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

}