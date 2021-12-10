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

    export function prepareSquirrel(): void {
        
        drawSquirrel();

    }

    function drawSquirrel(): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(172, 125, 73)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-100.750300, -540.121740);
        crc2.bezierCurveTo(-167.405020, -767.281210, -408.104400, -711.903090, -453.019050, -485.956870);
        crc2.bezierCurveTo(-459.546390, -453.120650, -461.871560, -416.193020, -443.993580, -390.497770);
        crc2.bezierCurveTo(-375.091030, -291.467110, -82.595060, -386.088680, -100.750300, -540.121740);
        crc2.fill();
        crc2.stroke();

        // #path358
        crc2.beginPath();
        crc2.fillStyle = "rgb(172, 125, 73)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-188.906000, -665.693830);
        crc2.bezierCurveTo(-97.669243, -743.767790, -247.392990, -830.290800, -248.559800, -685.737840);
        crc2.bezierCurveTo(-248.628700, -685.534180, -248.823900, -684.187020, -248.559800, -685.737840);
        crc2.fill();
        crc2.stroke();

        // #path366
        crc2.beginPath();
        crc2.fillStyle = "rgb(103, 70, 37)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-424.412830, -365.276520);
        crc2.bezierCurveTo(-421.969450, -365.968090, -419.425910, -366.957550, -418.310370, -369.406850);
        crc2.bezierCurveTo(-411.854910, -383.580420, -419.855990, -431.565920, -445.655030, -419.494200);
        crc2.bezierCurveTo(-474.418840, -406.035210, -447.395330, -366.938080, -424.412830, -365.276520);
        crc2.fill();
        crc2.stroke();

        // #path726
        crc2.beginPath();
        crc2.fillStyle = "rgb(234, 226, 190)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-225.656400, -667.546410);
        crc2.bezierCurveTo(-227.150030, -674.879310, -228.929480, -682.118210, -229.278460, -689.640070);
        crc2.bezierCurveTo(-229.857310, -702.116580, -224.381520, -725.662120, -206.774190, -721.382160);
        crc2.bezierCurveTo(-203.317550, -720.541930, -199.541710, -717.230160, -197.493670, -714.459290);
        crc2.bezierCurveTo(-188.583780, -702.404820, -197.082850, -688.388650, -206.047520, -679.511610);
        crc2.bezierCurveTo(-210.439760, -675.162310, -218.707640, -667.196160, -225.656400, -667.546410);
        crc2.fill();
        crc2.stroke();

        // #path734
        crc2.beginPath();
        crc2.fillStyle = "rgb(172, 125, 73)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-265.048970, -362.234370);
        crc2.bezierCurveTo(-227.852620, -296.076970, -407.494440, -336.329760, -424.979410, -291.129530);
        crc2.bezierCurveTo(-426.030310, -281.223520, -426.066890, -266.121450, -417.308230, -259.178990);
        crc2.bezierCurveTo(-404.085650, -248.698240, -388.989720, -257.788870, -374.385550, -253.246820);
        crc2.bezierCurveTo(-342.905040, -243.456050, -273.489740, -208.747040, -242.430840, -222.114590);
        crc2.bezierCurveTo(-215.162730, -231.209080, -181.295220, -247.957630, -174.108150, -278.614280);
        crc2.bezierCurveTo(-166.436920, -275.558920, -161.011030, -266.648900, -158.370220, -258.924760);
        crc2.bezierCurveTo(-170.815290, -245.481020, -178.659010, -230.017150, -182.737170, -212.176260);
        crc2.bezierCurveTo(-192.426530, -169.787920, -173.142670, -84.832573, -133.626330, -61.651899);
        crc2.bezierCurveTo(-156.035270, -62.724910, -227.494660, -34.065685, -197.868220, -3.672846);
        crc2.bezierCurveTo(-181.372770, 13.249325, -106.879910, 6.588859, -86.024620, 2.224732);
        crc2.bezierCurveTo(-24.338928, -6.896871, 33.415346, 8.207098, 95.003150, -0.718396);
        crc2.bezierCurveTo(113.071770, -3.336956, 144.461090, -10.341217, 158.647640, -26.505227);
        crc2.bezierCurveTo(190.401470, -55.027531, 212.971930, -87.813554, 231.899620, -124.097580);
        crc2.bezierCurveTo(273.784820, -204.390720, 287.192520, -290.497360, 244.886470, -372.038150);
        crc2.bezierCurveTo(240.108070, -381.248050, 234.342140, -394.160390, 228.326980, -402.581320);
        crc2.bezierCurveTo(217.822010, -420.131400, 203.311460, -436.039040, 187.759970, -449.505100);
        crc2.bezierCurveTo(154.144260, -478.613000, 113.456190, -501.037160, 69.387734, -509.005830);
        crc2.bezierCurveTo(18.131906, -518.274160, -36.939303, -488.276020, -82.920560, -523.353870);
        crc2.bezierCurveTo(-93.082023, -531.105780, -91.396609, -529.324020, -100.750300, -540.121740);
        crc2.fill();
        crc2.stroke();

        // #path1472
        crc2.beginPath();
        crc2.fillStyle = "rgb(234, 226, 190)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-185.595820, -182.793940);
        crc2.bezierCurveTo(-200.694310, -194.850680, -209.690650, -216.349360, -213.165170, -234.968600);
        crc2.bezierCurveTo(-194.325160, -244.370450, -178.167170, -259.710650, -174.108150, -278.614280);
        crc2.bezierCurveTo(-167.311040, -275.189580, -163.068510, -269.548400, -160.304140, -263.620020);
        crc2.bezierCurveTo(-159.540270, -261.981840, -159.339630, -259.600910, -158.370220, -258.924760);
        crc2.bezierCurveTo(-170.533610, -246.805540, -181.374350, -225.153920, -184.052890, -208.060180);
        crc2.bezierCurveTo(-184.777370, -203.436720, -185.063780, -198.087330, -185.200390, -193.421240);
        crc2.bezierCurveTo(-185.303180, -189.910440, -185.595820, -182.793940, -185.595820, -182.793940);
        crc2.fill();
        crc2.stroke();

        // #path1830
        crc2.beginPath();
        crc2.fillStyle = "rgb(129, 91, 52)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(158.647640, -26.505227);
        crc2.bezierCurveTo(314.693880, -56.452401, 413.620000, -268.156140, 374.047670, -412.633310);
        crc2.bezierCurveTo(347.988210, -507.775450, 208.349960, -607.564190, 224.014870, -710.286280);
        crc2.bezierCurveTo(232.142940, -763.585780, 273.375570, -815.508310, 333.694190, -777.509780);
        crc2.bezierCurveTo(370.813320, -754.126080, 352.269170, -690.326870, 356.553410, -693.910940);
        crc2.bezierCurveTo(377.595300, -711.513980, 400.893600, -752.125010, 408.429690, -776.634890);
        crc2.bezierCurveTo(444.916420, -895.301840, 389.623550, -990.780390, 277.370290, -1024.843900);
        crc2.bezierCurveTo(213.997580, -1044.074400, 162.556590, -1038.052900, 96.846019, -1018.292000);
        crc2.bezierCurveTo(47.542657, -1003.465200, -14.005158, -956.158810, -44.854046, -912.783310);
        crc2.bezierCurveTo(-101.423920, -833.242530, -78.334231, -685.813750, -28.896799, -603.719810);
        crc2.bezierCurveTo(-5.580324, -565.001350, 19.606247, -533.461980, 60.574574, -510.415120);
        crc2.bezierCurveTo(199.668150, -476.832220, 268.207790, -384.399230, 268.906800, -250.003610);
        crc2.bezierCurveTo(269.270970, -179.987430, 219.327640, -84.061864, 158.647640, -26.505227);
        crc2.fill();
        crc2.stroke();

        // #path2454
        crc2.beginPath();
        crc2.fillStyle = "rgb(129, 91, 52)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-158.370220, -258.924760);
        crc2.bezierCurveTo(-123.051360, -307.849480, -33.407826, -324.844430, 20.520637, -299.186990);
        crc2.bezierCurveTo(28.541982, -295.370700, 41.087362, -287.719470, 46.224031, -279.057470);
        crc2.bezierCurveTo(46.324467, -278.888100, 44.261645, -280.040050, 43.966823, -280.298970);
        crc2.bezierCurveTo(39.733913, -284.016390, 33.464785, -286.474880, 28.492632, -289.095150);
        crc2.bezierCurveTo(15.694466, -295.839620, 1.239929, -298.428010, -13.019019, -299.604640);
        crc2.bezierCurveTo(-50.164468, -302.669810, -91.104968, -293.946230, -123.742420, -275.930040);
        crc2.bezierCurveTo(-150.644810, -261.079640, -165.712510, -238.427060, -175.206580, -206.341990);
        crc2.bezierCurveTo(-178.701340, -194.531520, -179.326360, -185.516200, -180.656320, -172.987490);
        crc2.bezierCurveTo(-181.133430, -168.492930, -181.715030, -164.193680, -182.518700, -159.842880);
        crc2.bezierCurveTo(-182.736440, -158.664120, -183.131740, -155.088080, -182.944020, -156.272000);
        crc2.bezierCurveTo(-182.217000, -160.856950, -184.516340, -169.085400, -184.686030, -173.666310);
        crc2.bezierCurveTo(-185.597750, -198.277530, -185.288140, -209.369070, -178.928740, -226.549020);
        crc2.bezierCurveTo(-176.651190, -232.701820, -164.786060, -256.342930, -158.370220, -258.924760);
        crc2.fill();
        crc2.stroke();

        // #path3586
        crc2.beginPath();
        crc2.fillStyle = "rgb(103, 70, 37)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(344.929640, -187.095630);
        crc2.bezierCurveTo(389.655000, -279.245640, 377.010550, -407.725270, 315.279560, -487.517570);
        crc2.bezierCurveTo(261.815940, -556.623640, 158.144890, -610.657080, 168.971730, -708.344050);
        crc2.bezierCurveTo(176.581340, -777.003030, 227.895540, -832.305710, 300.766560, -821.230960);
        crc2.bezierCurveTo(319.605100, -818.367930, 336.594780, -815.444330, 351.299820, -802.479640);
        crc2.bezierCurveTo(383.059560, -774.478630, 374.982380, -727.132930, 356.141030, -693.938800);
        crc2.bezierCurveTo(357.461420, -712.594540, 359.406360, -741.842320, 350.563760, -758.411530);
        crc2.bezierCurveTo(335.202750, -787.194920, 292.252240, -800.164680, 264.096440, -781.554910);
        crc2.bezierCurveTo(254.068450, -774.926840, 246.154610, -765.228860, 239.911240, -755.282730);
        crc2.bezierCurveTo(213.693670, -713.516280, 222.047410, -670.731990, 235.926230, -635.302410);
        crc2.bezierCurveTo(246.064320, -614.444860, 257.853660, -595.055770, 270.999110, -575.424580);
        crc2.bezierCurveTo(277.928250, -565.076730, 287.043900, -554.509150, 294.459530, -544.488860);
        crc2.bezierCurveTo(314.615820, -517.252910, 331.355320, -494.835570, 348.102060, -468.440450);
        crc2.bezierCurveTo(354.059110, -457.110410, 360.636700, -447.521450, 365.867110, -435.789130);
        crc2.bezierCurveTo(371.075390, -424.106460, 375.389920, -412.851320, 378.050470, -395.280140);
        crc2.bezierCurveTo(383.200290, -361.268970, 384.140610, -344.130330, 380.760440, -310.025220);
        crc2.bezierCurveTo(379.075590, -275.429690, 363.036300, -227.814510, 354.985430, -209.754500);
        crc2.bezierCurveTo(352.578060, -204.354190, 349.631530, -192.735980, 344.929640, -187.095630);
        crc2.fill();
        crc2.stroke();

        // #path3821
        crc2.beginPath();
        crc2.fillStyle = "rgb(234, 226, 190)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-396.747620, -425.848060);
        crc2.bezierCurveTo(-366.109800, -423.190190, -328.246410, -436.432730, -301.753530, -450.837120);
        crc2.bezierCurveTo(-274.803690, -465.489960, -258.590800, -475.271220, -242.059850, -501.149830);
        crc2.bezierCurveTo(-212.997670, -546.645630, -237.661460, -605.655980, -289.898370, -609.372570);
        crc2.bezierCurveTo(-362.011440, -614.503330, -391.513650, -539.100340, -396.252040, -483.679170);
        crc2.bezierCurveTo(-397.204260, -472.541850, -403.739720, -435.812190, -396.747620, -425.848060);
        crc2.fill();
        crc2.stroke();

        // #path4217
        crc2.beginPath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-319.794340, -540.395110);
        crc2.bezierCurveTo(-302.994780, -526.203950, -287.169290, -465.382540, -328.421520, -469.430520);
        crc2.bezierCurveTo(-355.880540, -472.125010, -373.443380, -524.431740, -342.819230, -543.423380);
        crc2.bezierCurveTo(-335.280140, -548.098760, -326.361950, -546.364710, -318.022180, -548.473090);
        crc2.bezierCurveTo(-313.153260, -549.704010, -310.552990, -550.676100, -306.173820, -553.062090);
        crc2.bezierCurveTo(-305.505460, -553.426260, -301.875370, -556.332460, -302.034540, -555.588140);
        crc2.bezierCurveTo(-303.043000, -550.872490, -310.955950, -547.267360, -314.695840, -545.144640);
        crc2.bezierCurveTo(-316.858060, -543.917370, -307.242810, -544.851900, -307.242810, -544.851900);
        crc2.bezierCurveTo(-308.627250, -541.668570, -316.803440, -540.557810, -319.794340, -540.395110);
        crc2.fill();
        crc2.stroke();

        // #path4731
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-328.088330, -533.157420);
        crc2.bezierCurveTo(-335.627900, -541.324320, -351.937900, -525.744430, -340.887570, -519.043970);
        crc2.bezierCurveTo(-331.662850, -513.450460, -320.142150, -521.297420, -328.088330, -533.157420);
        crc2.fill();
        crc2.stroke();

        // #path4733
        crc2.beginPath();
        crc2.fillStyle = "rgb(236, 236, 236)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-343.615850, -510.885940);
        crc2.bezierCurveTo(-344.232910, -511.938240, -345.010820, -512.037090, -346.085470, -511.549330);
        crc2.bezierCurveTo(-347.526870, -510.895090, -348.539880, -509.525340, -348.700690, -507.947050);
        crc2.bezierCurveTo(-349.407180, -501.013430, -338.338660, -504.422930, -343.615850, -510.885940);
        crc2.fill();
        crc2.stroke();

        // #path10511
        crc2.beginPath();
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.070004;
        crc2.lineCap = "butt";
        crc2.lineJoin = "miter";
        crc2.moveTo(-248.559800, -685.737840);
        crc2.stroke();
    }
}