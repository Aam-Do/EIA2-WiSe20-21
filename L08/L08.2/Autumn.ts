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
        horizon = crc2.canvas.width * golden;

        drawBackground();
        // drawMiddleground();
        // drawForeground();
    }

    function drawBackground(): void {
        let sunPosition: Vector = {x: calculateRandom(0, crc2.canvas.width), y: calculateRandom(150, horizon - 50)}
        let mountainPosition: Vector = {x: 0, y: horizon};
        // drawSky();
        // drawSun();
        // drawMountains();
        // drawGround();
        // drawFog();
    }

    function calculateRandom(_min: number, _max: number): number {
        let random: number = (Math.random() * (_max - _min)) + _min;
        return(random);
    }

}