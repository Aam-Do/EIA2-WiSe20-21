"use strict";
var AutumLeaves;
(function (AutumLeaves) {
    class Squirrel {
        constructor() {
            this.position = new AutumLeaves.Vector(AutumLeaves.calculateRandom(AutumLeaves.crc2.canvas.width * 0.15, AutumLeaves.crc2.canvas.width * 0.75), AutumLeaves.calculateRandom(AutumLeaves.crc2.canvas.height - 20, AutumLeaves.crc2.canvas.height - 100));
            this.velocity = new AutumLeaves.Vector(0, 0);
            this.velocity.random(50, 120);
            this.size = AutumLeaves.calculateRandom(0.9, 1.3);
        }
        skate(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > AutumLeaves.crc2.canvas.width * 0.75) {
                this.velocity.random(50, 120, Math.PI / 2, (3 * Math.PI) / 2);
            }
            else if (this.position.y > AutumLeaves.crc2.canvas.height - 20) {
                this.velocity.random(50, 120, Math.PI, 2 * Math.PI);
            }
            else if (this.position.x < AutumLeaves.crc2.canvas.width * 0.15) {
                this.velocity.random(50, 120, 0, Math.PI / 2);
            }
            else if (this.position.y < AutumLeaves.crc2.canvas.height - 100) {
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
            AutumLeaves.crc2.save();
            AutumLeaves.crc2.translate(this.position.x, this.position.y);
            let scale = new AutumLeaves.Vector((0.1 * this.size) + (this.position.y - 600) / 1000, (0.1 * this.size) + (this.position.y - 600) / 1000);
            AutumLeaves.crc2.scale(scale.x, scale.y);
            if (this.facing == "right")
                AutumLeaves.crc2.scale(-1, 1);
            AutumLeaves.prepareSquirrel();
            AutumLeaves.crc2.restore();
        }
    }
    AutumLeaves.Squirrel = Squirrel;
})(AutumLeaves || (AutumLeaves = {}));
//# sourceMappingURL=Squirrel.js.map