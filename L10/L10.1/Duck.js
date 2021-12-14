"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Dog extends FarmHeritage.Animal {
        constructor(_name) {
            let species = "dog";
            let type = "German Shepherd";
            let food = "meat";
            let sound = "woof";
            let hunger = 8;
            let special = "chased away the delivery man.";
            super(_name, species, type, food, sound, hunger, special);
        }
    }
    FarmHeritage.Dog = Dog;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Duck.js.map