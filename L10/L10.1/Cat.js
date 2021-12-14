"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Cat extends FarmHeritage.Animal {
        constructor(_name) {
            super();
            this.name = _name;
            this.species = "cat";
            this.type = "Ragdoll";
            this.food = "fish";
            this.sound = "meow";
            this.hunger = 5;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "caught a mouse.";
            this.isFed = true;
        }
    }
    FarmHeritage.Cat = Cat;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Cat.js.map