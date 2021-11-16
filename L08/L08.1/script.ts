window.addEventListener("DOMContentLoaded", handleLoad);

let crc2: CanvasRenderingContext2D;

function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = canvas.getContext("2d")!;
    bePog();
}

function bePog(): void {
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
    crc2.strokeStyle = "#0000FF";
    
    crc2.fillStyle = "#FFFF00";
    crc2.fillText("helo", 50, 50);


}