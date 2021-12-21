"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Duck extends FarmHeritage.Animal {
        constructor(_name) {
            super(_name, "duck", Duck.types[Math.round(Math.random() * 4)], "seeds", "quack", 3, "bit the neighbor.", true);
        }
    }
    Duck.types = ["Northern Pintail", "King Eider", "Barrow's Goldeneye", "Ruddy Duck", "Velvet Scoter"];
    FarmHeritage.Duck = Duck;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Duck.js.map