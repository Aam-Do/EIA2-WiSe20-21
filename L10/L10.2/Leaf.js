"use strict";
var AutumnMoveables;
(function (AutumnMoveables) {
    class Leaf {
        constructor() {
            this.position = new AutumnMoveables.Vector(AutumnMoveables.calculateRandom(0, AutumnMoveables.crc2.canvas.width), 0);
            this.velocity = new AutumnMoveables.Vector(0, 0);
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);
            this.type = Math.round(AutumnMoveables.calculateRandom(1, 3));
            this.scale = new AutumnMoveables.Vector(AutumnMoveables.calculateRandom(0.1, 0.6), AutumnMoveables.calculateRandom(0.1, 0.6));
            this.rotation = AutumnMoveables.calculateRandom(0, 360);
            this.rotationSpeed = AutumnMoveables.calculateRandom(-10, 10);
            this.color = AutumnMoveables.crc2.createLinearGradient(-150, 20, 150, -20);
            this.color.addColorStop(0, "hsl(" + AutumnMoveables.calculateRandom(0, 60) + ", 75%, 50%)");
            this.color.addColorStop(1, "hsl(" + AutumnMoveables.calculateRandom(50, 100) + ", 70%, 40%)");
        }
        fall(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > AutumnMoveables.crc2.canvas.width)
                this.position.x -= AutumnMoveables.crc2.canvas.width;
            if (this.position.y > AutumnMoveables.crc2.canvas.height)
                this.position.y -= AutumnMoveables.crc2.canvas.height;
            this.rotation += this.rotationSpeed * _timeslice;
        }
        draw() {
            AutumnMoveables.crc2.save();
            AutumnMoveables.crc2.translate(this.position.x, this.position.y);
            AutumnMoveables.crc2.scale(this.scale.x, this.scale.y);
            AutumnMoveables.crc2.rotate(this.rotation);
            AutumnMoveables.drawLeaf(this.type, this.color);
            AutumnMoveables.crc2.restore();
        }
    }
    AutumnMoveables.Leaf = Leaf;
})(AutumnMoveables || (AutumnMoveables = {}));
//# sourceMappingURL=Leaf.js.map