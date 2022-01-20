namespace AutumnNuts {
    export class Leaf extends Moveable {
        private type: number;
        private scale: Vector;
        private rotation: number;
        private rotationSpeed: number;
        private color: CanvasGradient;
        private originalVelocity: Vector;

        constructor() {
            super(new Vector(calculateRandom(0, crc2.canvas.width), 0));
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);
            this.originalVelocity = this.velocity.copy();

            this.type = Math.round(calculateRandom(1, 3));
            this.scale = new Vector(calculateRandom(0.1, 0.6), calculateRandom(0.1, 0.6));
            this.rotation = calculateRandom(0, 360);
            this.rotationSpeed = calculateRandom(-10, 10);

            this.color = crc2.createLinearGradient(-150, 20, 150, -20);
            this.color.addColorStop(0, "hsl(" + calculateRandom(0, 60) + ", 75%, 50%)");
            this.color.addColorStop(1, "hsl(" + calculateRandom(50, 100) + ", 70%, 40%)");
        }

        public push(_pointer: Vector): void {
            let theta: number = Math.atan2(this.position.y - _pointer.y, this.position.x - _pointer.x);
            let distance: number = 2000 / Math.sqrt((_pointer.x - this.position.x) * (_pointer.x - this.position.x) + (_pointer.y - this.position.y) * (_pointer.y - this.position.y));

            this.velocity.x += Math.cos(theta) * distance + (this.originalVelocity.x - this.velocity.x) * 0.05;
            this.velocity.y += Math.sin(theta) * distance + (this.originalVelocity.y - this.velocity.y) * 0.05;
        }

        public move(_timeslice: number): void {
            if (this.velocity.x != this.originalVelocity.x || this.velocity.y != this.originalVelocity.y) {
                let difference: Vector = new Vector(this.originalVelocity.x - this.velocity.x, this.originalVelocity.y - this.velocity.y);
                if (difference.length > 0.001) {
                    difference.scale(_timeslice * 0.01);
                    this.velocity.add(difference);
                }
                else {
                    this.velocity.set(this.originalVelocity.x, this.originalVelocity.y);
                }
            }

            super.move(_timeslice);

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

            this.rotation += this.rotationSpeed * _timeslice;
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);
            crc2.rotate(this.rotation);
            drawLeaf(this.type, this.color);
            crc2.restore();
        }
    }
}