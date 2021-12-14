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
            let stash: string = this.food + ": " + _stashes[this.food] + "kg";
            if (_stashes[this.food] - this.hunger < 0) {
                _stashes[this.food] = 0;
                this.isFed = false;
            }
            else {
                _stashes[this.food] -= this.hunger;
            }
            return (stash);
        }

        doSpecialAction(): string {
            let action: string;
            if (this.isFed == true) {
                action = "<b>" + this.name + "</b><br>" + this.special;
            }
            else {
                action = "";
            }
            return (action);
        }
    }
}
