"use strict";
var AutumnMoveables;
(function (AutumnMoveables) {
    class Squirrel extends AutumnMoveables.Moveable {
        constructor() {
            super(new AutumnMoveables.Vector(AutumnMoveables.calculateRandom(AutumnMoveables.crc2.canvas.width * 0.15, AutumnMoveables.crc2.canvas.width * 0.75), AutumnMoveables.calculateRandom(AutumnMoveables.crc2.canvas.height - 20, AutumnMoveables.crc2.canvas.height - 100)));
            this.velocity.random(50, 120);
            this.size = AutumnMoveables.calculateRandom(0.9, 1.3);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x > AutumnMoveables.crc2.canvas.width * 0.75) {
                this.velocity.random(50, 120, Math.PI / 2, (3 * Math.PI) / 2);
            }
            else if (this.position.y > AutumnMoveables.crc2.canvas.height - 20) {
                this.velocity.random(50, 120, Math.PI, 2 * Math.PI);
            }
            else if (this.position.x < AutumnMoveables.crc2.canvas.width * 0.15) {
                this.velocity.random(50, 120, 0, Math.PI / 2);
            }
            else if (this.position.y < AutumnMoveables.crc2.canvas.height - 100) {
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
            AutumnMoveables.crc2.save();
            AutumnMoveables.crc2.translate(this.position.x, this.position.y);
            let scale = new AutumnMoveables.Vector((0.1 * this.size) + (this.position.y - 600) / 1000, (0.1 * this.size) + (this.position.y - 600) / 1000);
            AutumnMoveables.crc2.scale(scale.x, scale.y);
            if (this.facing == "right")
                AutumnMoveables.crc2.scale(-1, 1);
            AutumnMoveables.prepareSquirrel();
            AutumnMoveables.crc2.restore();
        }
    }
    AutumnMoveables.Squirrel = Squirrel;
})(AutumnMoveables || (AutumnMoveables = {}));
//# sourceMappingURL=Squirrel.js.map