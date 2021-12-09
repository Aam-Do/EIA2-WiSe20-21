namespace AutumLeaves {
    export class Leaf {
        position: Vector;
        velocity: Vector;
        type: number;
        scale: Vector;
        rotation: number;
        rotationSpeed: number;
        color: CanvasGradient;

        constructor() {
            console.log("Leaf constructor");
            this.position = new Vector(calculateRandom(0, crc2.canvas.width), 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200, 0, Math.PI / 2);

            this.type = Math.round(calculateRandom(1, 3));
            this.scale = new Vector(calculateRandom(0.1, 0.6), calculateRandom(0.1, 0.6));
            this.rotation = calculateRandom(0, 360);
            this.rotationSpeed = calculateRandom(1, 360);

            this.color = crc2.createLinearGradient(-150, 20, 150, -20);
            this.color.addColorStop(0, "hsl(" + calculateRandom(0, 60) + ", 75%, 50%)");
            this.color.addColorStop(1, "hsl(" + calculateRandom(50, 100) + ", 70%, 40%)");
        }

        fall(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

            this.rotation += this.rotationSpeed * _timeslice;
            if (this.rotation > 360)
                this.rotation -= 360;
        }

        draw(): void {
            console.log("Leaf draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);
            crc2.translate(-50, -50);
            crc2.rotate(this.rotation);
            drawLeaf(this.type, this.color);
            crc2.restore();
        }
    }
}