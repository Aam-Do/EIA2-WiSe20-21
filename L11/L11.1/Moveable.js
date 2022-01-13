"use strict";
var AutumnNuts;
(function (AutumnNuts) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
            this.velocity = new AutumnNuts.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    AutumnNuts.Moveable = Moveable;
})(AutumnNuts || (AutumnNuts = {}));
//# sourceMappingURL=Moveable.js.map