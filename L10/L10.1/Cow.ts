namespace FarmHeritage {
    export class Cow extends Animal {
        types: string[] = ["Belted Galloway", "Charolais", "Dexter", "Hereford", "Scottish Highland"];

        constructor(_name: string) {
            super();
            this.name = _name;
            this.species = "cow";
            this.type = this.types[Math.round(Math.random() * 4)];
            this.food = "hay";
            this.sound = "moo";
            this.hunger = 15;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "produced " + Math.round((Math.random() * 45) + 5) + "l Milk.";
            this.isFed = true;
        }
    }
}