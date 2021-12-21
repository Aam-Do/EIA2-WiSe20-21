"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Pig extends FarmHeritage.Animal {
        constructor(_name) {
            super(_name, "pig", Pig.types[Math.round(Math.random() * 4)], "carrots", "oink", 9, "took a nice mudbath.", true);
        }
    }
    Pig.types = ["Tamworth", "Hereford", "Hampshire", "Duroc", "Angeln Saddleback"];
    FarmHeritage.Pig = Pig;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Pig.js.map