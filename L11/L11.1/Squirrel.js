"use strict";
var AutumnNuts;
(function (AutumnNuts) {
    class Squirrel extends AutumnNuts.Moveable {
        constructor() {
            super(new AutumnNuts.Vector(AutumnNuts.calculateRandom(AutumnNuts.crc2.canvas.width * 0.15, AutumnNuts.crc2.canvas.width * 0.75), AutumnNuts.calculateRandom(AutumnNuts.crc2.canvas.height - 20, AutumnNuts.crc2.canvas.height - 100)));
            this.velocity.random(50, 120);
            this.size = AutumnNuts.calculateRandom(0.9, 1.3);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x > AutumnNuts.crc2.canvas.width * 0.75) {
                this.velocity.random(50, 120, Math.PI / 2, (3 * Math.PI) / 2);
            }
            else if (this.position.y > AutumnNuts.crc2.canvas.height - 20) {
                this.velocity.random(50, 120, Math.PI, 2 * Math.PI);
            }
            else if (this.position.x < AutumnNuts.crc2.canvas.width * 0.15) {
                this.velocity.random(50, 120, 0, Math.PI / 2);
            }
            else if (this.position.y < AutumnNuts.crc2.canvas.height - 100) {
                this.velocity.random(50, 120, 0, Math.PI);
            }
            if (this.velocity.x > 0) {
                this.facing = "right";
            }
            else {
                this.facing = "left";
            }
        }
        draw() {
            AutumnNuts.crc2.save();
            AutumnNuts.crc2.translate(this.position.x, this.position.y);
            let scale = new AutumnNuts.Vector((0.1 * this.size) + (this.position.y - 600) / 1000, (0.1 * this.size) + (this.position.y - 600) / 1000);
            AutumnNuts.crc2.scale(scale.x, scale.y);
            if (this.facing == "right")
                AutumnNuts.crc2.scale(-1, 1);
            AutumnNuts.drawSquirrel();
            AutumnNuts.crc2.restore();
        }
    }
    AutumnNuts.Squirrel = Squirrel;
})(AutumnNuts || (AutumnNuts = {}));
//# sourceMappingURL=Squirrel.js.map