namespace AutumnNuts {
    export class Nut extends Moveable {

        constructor(_position: Vector) {
            super(_position);
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            let scale: number = (0.1 * 1) + (this.position.y - 600) / 1000;
            crc2.scale(scale, scale);
            drawNut();
            crc2.restore();
        }
    }
}