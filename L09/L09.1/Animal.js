"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_name, _species, _food, _sound, _hunger) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.hunger = _hunger;
            this.lyrics = `Old MacDonald had a farm, E-I-E-I-O, <br> And on his farm he had a ${this.species}, E-I-E-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-E-I-O.`;
        }
        sing(_div) {
            let song = document.createElement("p");
            song.innerHTML = this.name + "<br>" + this.lyrics;
            _div.appendChild(song);
        }
        eat() {
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map