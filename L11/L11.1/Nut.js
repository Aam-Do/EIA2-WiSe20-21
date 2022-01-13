"use strict";
var AutumnNuts;
(function (AutumnNuts) {
    class Nut extends AutumnNuts.Moveable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            AutumnNuts.crc2.save();
            AutumnNuts.crc2.translate(this.position.x, this.position.y);
            let scale = (0.1 * 1) + (this.position.y - 600) / 1000;
            AutumnNuts.crc2.scale(scale, scale);
            AutumnNuts.drawNut();
            AutumnNuts.crc2.restore();
        }
    }
    AutumnNuts.Nut = Nut;
})(AutumnNuts || (AutumnNuts = {}));
//# sourceMappingURL=Nut.js.map