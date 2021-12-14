"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Cat extends FarmHeritage.Animal {
        constructor(_name) {
            let species = "cat";
            let type = "Ragdoll";
            let food = "fish";
            let sound = "meow";
            let hunger = 5;
            let special = "caught a mouse";
            super(_name, species, type, food, sound, hunger, special);
        }
    }
    FarmHeritage.Cat = Cat;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Cat.js.map