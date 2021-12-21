"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Cat extends FarmHeritage.Animal {
        constructor(_name) {
            super(_name, "cat", Cat.types[Math.round(Math.random() * 4)], "fish", "meow", 5, "caught a mouse.", true);
        }
    }
    Cat.types = ["Maine Coon", "Birman", "Bengal", "American Shorthair", "Sphynx"];
    FarmHeritage.Cat = Cat;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Cat.js.map