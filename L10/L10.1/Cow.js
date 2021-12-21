"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Cow extends FarmHeritage.Animal {
        constructor(_name) {
            super(_name, "cow", Cow.types[Math.round(Math.random() * 4)], "hay", "moo", 15, "produced " + Math.round((Math.random() * 45) + 5) + "l Milk.", true);
        }
    }
    Cow.types = ["Belted Galloway", "Charolais", "Dexter", "Hereford", "Scottish Highland"];
    FarmHeritage.Cow = Cow;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Cow.js.map