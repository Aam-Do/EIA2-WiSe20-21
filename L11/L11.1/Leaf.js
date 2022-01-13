"use strict";
var AutumnNuts;
(function (AutumnNuts) {
    class Leaf extends AutumnNuts.Moveable {
        constructor() {
            super(new AutumnNuts.Vector(AutumnNuts.calculateRandom(0, AutumnNuts.crc2.canvas.width), 0));
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);
            this.type = Math.round(AutumnNuts.calculateRandom(1, 3));
            this.scale = new AutumnNuts.Vector(AutumnNuts.calculateRandom(0.1, 0.6), AutumnNuts.calculateRandom(0.1, 0.6));
            this.rotation = AutumnNuts.calculateRandom(0, 360);
            this.rotationSpeed = AutumnNuts.calculateRandom(-10, 10);
            this.color = AutumnNuts.crc2.createLinearGradient(-150, 20, 150, -20);
            this.color.addColorStop(0, "hsl(" + AutumnNuts.calculateRandom(0, 60) + ", 75%, 50%)");
            this.color.addColorStop(1, "hsl(" + AutumnNuts.calculateRandom(50, 100) + ", 70%, 40%)");
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x > AutumnNuts.crc2.canvas.width)
                this.position.x -= AutumnNuts.crc2.canvas.width;
            if (this.position.y > AutumnNuts.crc2.canvas.height)
                this.position.y -= AutumnNuts.crc2.canvas.height;
            this.rotation += this.rotationSpeed * _timeslice;
        }
        draw() {
            AutumnNuts.crc2.save();
            AutumnNuts.crc2.translate(this.position.x, this.position.y);
            AutumnNuts.crc2.scale(this.scale.x, this.scale.y);
            AutumnNuts.crc2.rotate(this.rotation);
            AutumnNuts.drawLeaf(this.type, this.color);
            AutumnNuts.crc2.restore();
        }
    }
    AutumnNuts.Leaf = Leaf;
})(AutumnNuts || (AutumnNuts = {}));
//# sourceMappingURL=Leaf.js.map