"use strict";
var AutumnMoveables;
(function (AutumnMoveables) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
            this.velocity = new AutumnMoveables.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    AutumnMoveables.Moveable = Moveable;
})(AutumnMoveables || (AutumnMoveables = {}));
//# sourceMappingURL=Moveable.js.map