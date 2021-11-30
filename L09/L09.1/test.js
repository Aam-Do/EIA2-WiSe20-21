"use strict";
var Test;
(function (Test) {
    debugger;
    class Vector {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
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
    }
    let v1 = new Vector(2, 3);
    v1.scale(2);
    console.log(v1);
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map