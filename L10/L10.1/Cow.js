"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Cow extends FarmHeritage.Animal {
        constructor(_name) {
            super();
            this.types = ["Belted Galloway", "Charolais", "Dexter", "Hereford", "Scottish Highland"];
            this.name = _name;
            this.species = "cow";
            this.type = this.types[Math.round(Math.random() * 4)];
            this.food = "hay";
            this.sound = "moo";
            this.hunger = 15;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "produced " + Math.round((Math.random() * 45) + 5) + "l Milk.";
            this.isFed = true;
        }
    }
    FarmHeritage.Cow = Cow;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Cow.js.map