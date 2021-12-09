namespace AutumLeaves {
    export function drawLeaf(_type: number, _gradient: CanvasGradient): void {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, 100);
        crc2.lineTo(10, 100);
        crc2.closePath();
        crc2.fillStyle = "hsl(25, 35%, 25%)";
        crc2.fill();

        crc2.fillStyle = _gradient;
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

    function drawPointyLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.quadraticCurveTo(25, 25, 100, 25);
        crc2.quadraticCurveTo(75, -25, 50, -25);
        crc2.quadraticCurveTo(75, -50, 75, -125);
        crc2.quadraticCurveTo(0, -100, 25, -75);
        crc2.quadraticCurveTo(25, -125, 0, -200);
        crc2.quadraticCurveTo(-25, -100, -25, -75);
        crc2.quadraticCurveTo(0, -125, -75, -125);
        crc2.quadraticCurveTo(-75, -50, -50, -25);
        crc2.quadraticCurveTo(-75, -25, -100, 25);
        crc2.quadraticCurveTo(-25, 25, 0, 5);
        crc2.closePath();
        crc2.fill();
    }

    function drawRoundLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.bezierCurveTo(125, -50, 25, -150, 0, -200);
        crc2.bezierCurveTo(-25, -150, -125, -50, 0, 5);
        crc2.closePath();
        crc2.fill();
    }

    function drawMapleLeaf(): void {
        crc2.beginPath();
        crc2.moveTo(0, 5);
        crc2.lineTo(40, 50);
        crc2.lineTo(50, 30);
        crc2.lineTo(100, 50);
        crc2.lineTo(90, 30);
        crc2.lineTo(125, 20);
        crc2.lineTo(50, -30);
        crc2.lineTo(140, -50);
        crc2.lineTo(125, -75);
        crc2.lineTo(150, -100);
        crc2.lineTo(100, -110);
        crc2.lineTo(110, -125);
        crc2.lineTo(40, -100);
        crc2.lineTo(60, -165);
        crc2.lineTo(30, -150);
        crc2.lineTo(0, -200);
        crc2.lineTo(-30, -150);
        crc2.lineTo(-60, -165);
        crc2.lineTo(-40, -100);
        crc2.lineTo(-110, -125);
        crc2.lineTo(-100, -110);
        crc2.lineTo(-150, -100);
        crc2.lineTo(-125, -75);
        crc2.lineTo(-140, -50);
        crc2.lineTo(-50, -30);
        crc2.lineTo(-125, 20);
        crc2.lineTo(-90, 30);
        crc2.lineTo(-100, 50);
        crc2.lineTo(-50, 30);
        crc2.lineTo(-40, 50);
        crc2.closePath();
        crc2.fill();
    }
}