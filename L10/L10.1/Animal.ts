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
