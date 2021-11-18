window.addEventListener("DOMContentLoaded", handleLoad);

let crc2: CanvasRenderingContext2D;

function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = canvas.getContext("2d")!;
    bePog();
}

function bePog(): void {

    let gradient1: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

    let hue: string[] = [];

    for (let i = 0; i < 3; i++) {
        let random: number = Math.floor(360 * Math.random());
        hue.push(random.toString());  
    }

    let hsl: string = "hsl(";
    let saturation: string = ", 77%";
    let light: string = ", 67%)"

    gradient1.addColorStop(0, hsl + hue[0] + saturation + light);
    gradient1.addColorStop(.5, hsl + hue[1] + saturation + light);
    gradient1.addColorStop(1, hsl + hue[2] + saturation + light);

    crc2.fillStyle = gradient1;    
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

    for (let i = 0; i < 3; i++) {
        let random: number = Math.floor(360 * Math.random());
        hue.push(random.toString());  
    }


    gradient.addColorStop(0, hsl + hue[3] + saturation + light);
    gradient.addColorStop(.5, hsl + hue[4] + saturation + light);
    gradient.addColorStop(1, hsl + hue[5] + saturation + light);

    crc2.rotate(-30 * Math.PI / 180);
    crc2.scale(2, 1.2);

    crc2.fillStyle = gradient;    
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
    crc2.resetTransform();

    let random1: number = Math.floor(14 * Math.random()) + 1;
    
    for (let i = 0; i < random1; i++) {

        crc2.strokeStyle = "#0000FF";
        crc2.fillStyle = "#FF0000";
        crc2.beginPath();

        crc2.translate((crc2.canvas.width * Math.random()), (crc2.canvas.height * Math.random()));
        crc2.rotate((320 * Math.random()) * Math.PI / 180);
        crc2.scale(((2 * Math.random()) + 1), (2 * Math.random()));
        
        crc2.moveTo(-25, -25);
        
        crc2.lineTo(-25, 25);
        crc2.lineTo(30, 0);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.resetTransform();
    }

    
}