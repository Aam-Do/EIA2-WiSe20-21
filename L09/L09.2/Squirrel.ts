namespace AutumLeaves {
    export class Squirrel {
        position: Vector;
        facing: string;

        constructor() {
            this.position = new Vector(calculateRandom(crc2.canvas.width * 0.2, crc2.canvas.width * 0.8), calculateRandom(crc2.canvas.height - 25, crc2.canvas.height - 100));
            let towards: number = calculateRandom(0, 1);
            if (towards >= 0.5) {
                this.facing = "left";
            }
            else {
                this.facing = "right";
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(0.1, 0.1);
            if (this.facing == "right")
                crc2.scale(-1, 1);
            prepareSquirrel();
            crc2.restore();
        }
    }
}