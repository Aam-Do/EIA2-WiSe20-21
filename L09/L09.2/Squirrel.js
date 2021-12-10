"use strict";
var AutumLeaves;
(function (AutumLeaves) {
    class Squirrel {
        constructor(_position) {
            // this.position = new Vector(calculateRandom(crc2.canvas.width * 0.2, crc2.canvas.width * 0.8), calculateRandom(crc2.canvas.height - 25, crc2.canvas.height - 100));
            this.position = new AutumLeaves.Vector(_position.x, _position.y);
        }
        draw() {
            AutumLeaves.crc2.save();
            AutumLeaves.crc2.translate(this.position.x, this.position.y);
            AutumLeaves.crc2.scale(0.1, 0.1);
            AutumLeaves.prepareSquirrel();
            AutumLeaves.crc2.restore();
        }
    }
    AutumLeaves.Squirrel = Squirrel;
})(AutumLeaves || (AutumLeaves = {}));
//# sourceMappingURL=Squirrel.js.map