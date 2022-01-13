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

            if (this.target) {
                if (this.velocity.length() * _timeslice > new Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y).length()) {
                    this.velocity.set(0, 0);
                }
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            let scale: number = (0.1 * this.size) + (this.position.y - 600) / 1000;
            crc2.scale(scale, scale);
            if (this.facing == "right")
                crc2.scale(-1, 1);
            drawSquirrel();
            crc2.restore();
        }

        public search(_array: Moveable[]): void {
            let nut: Nut | undefined = undefined;
            let distance: number = Infinity;
            for (let thing of _array) {
                if (thing instanceof Nut == true) {
                    let thisNut: Nut = <Nut>thing;
                    let thisDistance: number = new Vector(this.position.x - thisNut.position.x, this.position.y - thisNut.position.y).length();
                    if (thisDistance < distance) {
                        distance = thisDistance;
                        nut = thisNut;
                    }
                }
            }
            if (nut) {
                this.velocity.set(nut.position.x - this.position.x, nut.position.y - this.position.y);
                this.velocity.scale(calculateRandom(0.2, 1.3));
                this.target = nut;
            }
            console.log(nut);
        }
    }
}