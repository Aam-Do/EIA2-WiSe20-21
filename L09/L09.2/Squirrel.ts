namespace AutumLeaves {
    export class Squirrel {
        position: Vector;

        constructor() {
            this.position = new Vector(calculateRandom(crc2.canvas.width * 0.2, crc2.canvas.width * 0.8), calculateRandom(crc2.canvas.height - 25, crc2.canvas.height - 100));
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // drawLeaf(this.type, this.color);
            crc2.restore();
        }
    }
}