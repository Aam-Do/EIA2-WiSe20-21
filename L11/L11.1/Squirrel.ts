namespace AutumnNuts {
    export class Squirrel extends Moveable {
        private facing: string;
        private size: number;
        private target: Nut;
        
        constructor() {
            super(new Vector(calculateRandom(crc2.canvas.width * 0.15, crc2.canvas.width * 0.75), calculateRandom(crc2.canvas.height - 20, crc2.canvas.height - 100)));
            this.velocity.random(50, 120);

            this.size = calculateRandom(0.9, 1.3);
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);

            if (this.position.x > crc2.canvas.width * 0.75) {
                this.velocity.random(50, 120, Math.PI / 2, (3 * Math.PI) / 2);
            }
            else if (this.position.y > crc2.canvas.height - 20) {
                this.velocity.random(50, 120, Math.PI, 2 * Math.PI);
            }
            else if (this.position.x < crc2.canvas.width * 0.15) {
                this.velocity.random(50, 120, 0, Math.PI / 2);
            }
            else if (this.position.y < crc2.canvas.height - 100) {  
                this.velocity.random(50, 120, 0, Math.PI);
            }

            if (this.velocity.x > 0) {
                this.facing = "right";
            }
            else {
                this.facing = "left";
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            let scale: Vector = new Vector((0.1 * this.size) + (this.position.y - 600) / 1000, (0.1  * this.size) + (this.position.y - 600) / 1000);
            crc2.scale(scale.x, scale.y);
            if (this.facing == "right")
                crc2.scale(-1, 1);
            drawSquirrel();
            crc2.restore();
        }
    }
}