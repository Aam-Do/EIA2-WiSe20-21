namespace Farm {

    class Animal {
        name: string;
        species: string;
        food: string;
        sound: string;
        hunger: number;
        lyrics: string;

        constructor(_name: string, _species: string, _food: string, _sound: string, _hunger: number) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.hunger = _hunger;
            this.lyrics = `Old MacDonald had a farm, E-I-E-I-O, <br> And on his farm he had a ${this.species}, E-I-E-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-E-I-O.`;
        }

        sing(_div: HTMLDivElement): void {
            let song: HTMLParagraphElement = document.createElement("p");
            song.innerHTML = this.name + "<br>" + this.lyrics;
            _div.appendChild(song);
        }

        eat(): void {
            
        }
    }

}