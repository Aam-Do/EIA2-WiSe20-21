"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_name, _species, _food, _sound, _hunger) {
            this.fed = true;
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.hunger = _hunger;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
        }
        sing() {
            let verse;
            if (this.fed == true) {
                verse = "<b>" + this.name + "</b><br>" + this.lyrics;
            }
            else {
                verse = "";
            }
            return (verse);
        }
        eat(_stashes) {
            let stash = this.food + ": " + _stashes[this.food] + "kg";
            if (_stashes[this.food] - this.hunger < 0) {
                _stashes[this.food] = 0;
                this.fed = false;
            }
            else {
                _stashes[this.food] -= this.hunger;
            }
            return (stash);
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map