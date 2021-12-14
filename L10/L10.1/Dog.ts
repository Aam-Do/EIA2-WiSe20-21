namespace FarmHeritage {
    export class Dog extends Animal {
        types: string[] = ["German Shepherd", "Welsh Corgi", "Jack-Russell Terrier", "Golden Retriever", "Toy Poodle"];

        constructor(_name: string) {
            super();
            this.name = _name;
            this.species = "dog";
            this.type = this.types[Math.round(Math.random() * 4)];
            this.food = "meat";
            this.sound = "woof";
            this.hunger = 8;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "chased away the mailman.";
            this.isFed = true;
        }
    }
}