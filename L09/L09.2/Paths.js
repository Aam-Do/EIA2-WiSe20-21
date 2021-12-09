"use strict";
var AutumLeaves;
(function (AutumLeaves) {
    function drawLeaf(_type, _gradient) {
        AutumLeaves.crc2.beginPath();
        AutumLeaves.crc2.moveTo(0, 0);
        AutumLeaves.crc2.lineTo(-10, 100);
        AutumLeaves.crc2.lineTo(10, 100);
        AutumLeaves.crc2.closePath();
        AutumLeaves.crc2.fillStyle = "hsl(25, 35%, 25%)";
        AutumLeaves.crc2.fill();
        AutumLeaves.crc2.fillStyle = _gradient;
        switch (_type) {
            case 1:
                drawMapleLeaf();
                break;
            case 2:
                drawRoundLeaf();
                break;
            default:
                drawPointyLeaf();
        }
    }
    AutumLeaves.drawLeaf = drawLeaf;
    function drawPointyLeaf() {
        AutumLeaves.crc2.beginPath();
        AutumLeaves.crc2.moveTo(0, 5);
        AutumLeaves.crc2.quadraticCurveTo(25, 25, 100, 25);
        AutumLeaves.crc2.quadraticCurveTo(75, -25, 50, -25);
        AutumLeaves.crc2.quadraticCurveTo(75, -50, 75, -125);
        AutumLeaves.crc2.quadraticCurveTo(0, -100, 25, -75);
        AutumLeaves.crc2.quadraticCurveTo(25, -125, 0, -200);
        AutumLeaves.crc2.quadraticCurveTo(-25, -100, -25, -75);
        AutumLeaves.crc2.quadraticCurveTo(0, -125, -75, -125);
        AutumLeaves.crc2.quadraticCurveTo(-75, -50, -50, -25);
        AutumLeaves.crc2.quadraticCurveTo(-75, -25, -100, 25);
        AutumLeaves.crc2.quadraticCurveTo(-25, 25, 0, 5);
        AutumLeaves.crc2.closePath();
        AutumLeaves.crc2.fill();
    }
    function drawRoundLeaf() {
        AutumLeaves.crc2.beginPath();
        AutumLeaves.crc2.moveTo(0, 5);
        AutumLeaves.crc2.bezierCurveTo(125, -50, 25, -150, 0, -200);
        AutumLeaves.crc2.bezierCurveTo(-25, -150, -125, -50, 0, 5);
        AutumLeaves.crc2.closePath();
        AutumLeaves.crc2.fill();
    }
    function drawMapleLeaf() {
        AutumLeaves.crc2.beginPath();
        AutumLeaves.crc2.moveTo(0, 5);
        AutumLeaves.crc2.lineTo(40, 50);
        AutumLeaves.crc2.lineTo(50, 30);
        AutumLeaves.crc2.lineTo(100, 50);
        AutumLeaves.crc2.lineTo(90, 30);
        AutumLeaves.crc2.lineTo(125, 20);
        AutumLeaves.crc2.lineTo(50, -30);
        AutumLeaves.crc2.lineTo(140, -50);
        AutumLeaves.crc2.lineTo(125, -75);
        AutumLeaves.crc2.lineTo(150, -100);
        AutumLeaves.crc2.lineTo(100, -110);
        AutumLeaves.crc2.lineTo(110, -125);
        AutumLeaves.crc2.lineTo(40, -100);
        AutumLeaves.crc2.lineTo(60, -165);
        AutumLeaves.crc2.lineTo(30, -150);
        AutumLeaves.crc2.lineTo(0, -200);
        AutumLeaves.crc2.lineTo(-30, -150);
        AutumLeaves.crc2.lineTo(-60, -165);
        AutumLeaves.crc2.lineTo(-40, -100);
        AutumLeaves.crc2.lineTo(-110, -125);
        AutumLeaves.crc2.lineTo(-100, -110);
        AutumLeaves.crc2.lineTo(-150, -100);
        AutumLeaves.crc2.lineTo(-125, -75);
        AutumLeaves.crc2.lineTo(-140, -50);
        AutumLeaves.crc2.lineTo(-50, -30);
        AutumLeaves.crc2.lineTo(-125, 20);
        AutumLeaves.crc2.lineTo(-90, 30);
        AutumLeaves.crc2.lineTo(-100, 50);
        AutumLeaves.crc2.lineTo(-50, 30);
        AutumLeaves.crc2.lineTo(-40, 50);
        AutumLeaves.crc2.closePath();
        AutumLeaves.crc2.fill();
    }
})(AutumLeaves || (AutumLeaves = {}));
//# sourceMappingURL=Paths.js.map