"use strict";
var AutumLeaves;
(function (AutumLeaves) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength, _minAngle = 0, _maxAngle = 2 * Math.PI) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = AutumLeaves.calculateRandom(_minAngle, _maxAngle);
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    AutumLeaves.Vector = Vector;
})(AutumLeaves || (AutumLeaves = {}));
//# sourceMappingURL=Vector.js.map