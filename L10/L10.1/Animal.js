"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Animal {
        sing() {
            let verse;
            if (this.isFed == true) {
                verse = "<b>" + this.name + " the " + this.type + "</b><br>" + this.lyrics;
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
                this.isFed = false;
            }
            else {
                _stashes[this.food] -= this.hunger;
            }
            return (stash);
        }
        doSpecialAction() {
            let action;
            if (this.isFed == true) {
                action = "<b>" + this.name + "</b><br>" + this.special;
            }
            else {
                action = "";
            }
            return (action);
        }
    }
    FarmHeritage.Animal = Animal;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Animal.js.map