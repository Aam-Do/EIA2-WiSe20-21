"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Dog extends FarmHeritage.Animal {
        constructor(_name) {
            super(_name, "dog", Dog.types[Math.round(Math.random() * 4)], "meat", "woof", 8, "chased away the mailman.", true);
        }
    }
    Dog.types = ["German Shepherd", "Welsh Corgi", "Jack-Russell Terrier", "Golden Retriever", "Toy Poodle"];
    FarmHeritage.Dog = Dog;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Dog.js.map