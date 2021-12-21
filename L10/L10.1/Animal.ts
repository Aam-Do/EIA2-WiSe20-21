namespace FarmHeritage {
    export class Animal {
        name: string;
        species: string;
        type: string;
        food: string;
        sound: string;
        hunger: number;
        lyrics: string;
        isFed: boolean;
        special: string;

        constructor(_name: string, _species: string, _type: string, _food: string, _sound: string, _hunger: number, _special: string, _isFed: boolean) {
        this.name = _name;
        this.species = _species;
        this.type = _type;
        this.food = _food;
        this.sound = _sound;
        this.hunger = _hunger;
        this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
        this.special = _special;
        this.isFed = _isFed;
        }

        sing(): string {
            let verse: string;
            if (this.isFed == true) {
                verse = "<b>" + this.name + " the " + this.type + "</b><br>" + this.lyrics;
            }
            else {
                verse = "";
            }
            return (verse);
        }

        eat(_stashes: Food): string {
            if (_stashes[this.food] - this.hunger < 0) {
                _stashes[this.food] = 0;
                this.isFed = false;
            }
            else {
                _stashes[this.food] -= this.hunger;
            }
            let stash: string = this.food + ": " + _stashes[this.food] + "kg";
            return (stash);
        }

        doSpecialAction(): string {
            let action: string;
            if (this.isFed == true) {
                action = "<b>" + this.name + "</b><br>" + this.special;
            }
            else {
                action = "<b>" + this.name + "</b><br>starved to death.";
            }
            return (action);
        }
    }
}
