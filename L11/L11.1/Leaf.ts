namespace AutumnNuts {
    export class Leaf extends Moveable {
        private type: number;
        private scale: Vector;
        private rotation: number;
        private rotationSpeed: number;
        private color: CanvasGradient;

        constructor() {
            super(new Vector(calculateRandom(0, crc2.canvas.width), 0));
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);

            this.type = Math.round(calculateRandom(1, 3));
            this.scale = new Vector(calculateRandom(0.1, 0.6), calculateRandom(0.1, 0.6));
            this.rotation = calculateRandom(0, 360);
            this.rotationSpeed = calculateRandom(-10, 10);

            this.color = crc2.createLinearGradient(-150, 20, 150, -20);
            this.color.addColorStop(0, "hsl(" + calculateRandom(0, 60) + ", 75%, 50%)");
            this.color.addColorStop(1, "hsl(" + calculateRandom(50, 100) + ", 70%, 40%)");
        }

        move(_timeslice: number): void {
            super.move(_timeslice);

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

            this.rotation += this.rotationSpeed * _timeslice;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);
            crc2.rotate(this.rotation);
            drawLeaf(this.type, this.color);
            crc2.restore();
        }
    }
}