"use strict";
var AutumLeaves;
(function (AutumLeaves) {
    class Leaf {
        constructor() {
            this.position = new AutumLeaves.Vector(AutumLeaves.calculateRandom(0, AutumLeaves.crc2.canvas.width), 0);
            this.velocity = new AutumLeaves.Vector(0, 0);
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);
            this.type = Math.round(AutumLeaves.calculateRandom(1, 3));
            this.scale = new AutumLeaves.Vector(AutumLeaves.calculateRandom(0.1, 0.6), AutumLeaves.calculateRandom(0.1, 0.6));
            this.rotation = AutumLeaves.calculateRandom(0, 360);
            this.rotationSpeed = AutumLeaves.calculateRandom(-10, 10);
            this.color = AutumLeaves.crc2.createLinearGradient(-150, 20, 150, -20);
            this.color.addColorStop(0, "hsl(" + AutumLeaves.calculateRandom(0, 60) + ", 75%, 50%)");
            this.color.addColorStop(1, "hsl(" + AutumLeaves.calculateRandom(50, 100) + ", 70%, 40%)");
        }
        fall(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > AutumLeaves.crc2.canvas.width)
                this.position.x -= AutumLeaves.crc2.canvas.width;
            if (this.position.y > AutumLeaves.crc2.canvas.height)
                this.position.y -= AutumLeaves.crc2.canvas.height;
            this.rotation += this.rotationSpeed * _timeslice;
        }
        draw() {
            AutumLeaves.crc2.save();
            AutumLeaves.crc2.translate(this.position.x, this.position.y);
            AutumLeaves.crc2.scale(this.scale.x, this.scale.y);
            AutumLeaves.crc2.rotate(this.rotation);
            AutumLeaves.drawLeaf(this.type, this.color);
            AutumLeaves.crc2.restore();
        }
    }
    AutumLeaves.Leaf = Leaf;
})(AutumLeaves || (AutumLeaves = {}));
//# sourceMappingURL=Leaf.js.map