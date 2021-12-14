"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Cow extends FarmHeritage.Animal {
        constructor(_name) {
            let species = "cow";
            let type = "Belted Galloway";
            let food = "hay";
            let sound = "moo";
            let hunger = 15;
            let special = "produced " + Math.round((Math.random() * 45) + 5) + "l Milk";
            super(_name, species, type, food, sound, hunger, special);
        }
    }
    FarmHeritage.Cow = Cow;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Cow.js.map