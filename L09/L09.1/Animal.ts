namespace Farm {
    export class Animal {
        name: string;
        species: string;
        food: string;
        sound: string;
        hunger: number;
        lyrics: string;
        fed: boolean = true;

        constructor(_name: string, _species: string, _food: string, _sound: string, _hunger: number) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.hunger = _hunger;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
        }

        sing(): string {
            let verse: string;
            if (this.fed == true) {
                verse = "<b>" + this.name + "</b><br>" + this.lyrics;
            }
            else {
                verse = "";
            }
            return (verse);

        }

        eat(_stashes: Food): string {
            let stash: string = this.food + ": " + _stashes[this.food] + "kg";
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
}
