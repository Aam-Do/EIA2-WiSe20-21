"use strict";
var AutumLeaves;
(function (AutumLeaves) {
    class Squirrel {
        constructor() {
            this.position = new AutumLeaves.Vector(AutumLeaves.calculateRandom(AutumLeaves.crc2.canvas.width * 0.2, AutumLeaves.crc2.canvas.width * 0.8), AutumLeaves.calculateRandom(AutumLeaves.crc2.canvas.height - 25, AutumLeaves.crc2.canvas.height - 100));
        }
        draw() {
            AutumLeaves.crc2.save();
            AutumLeaves.crc2.translate(this.position.x, this.position.y);
            // drawLeaf(this.type, this.color);
            AutumLeaves.crc2.restore();
        }
    }
    AutumLeaves.Squirrel = Squirrel;
})(AutumLeaves || (AutumLeaves = {}));
//# sourceMappingURL=Squirrel.js.map