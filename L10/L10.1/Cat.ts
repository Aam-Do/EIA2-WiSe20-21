namespace FarmHeritage {
    export class Cat extends Animal {
        types: string[] = ["Maine Coon", "Birman", "Bengal", "American Shorthair", "Sphynx"];

        constructor(_name: string) {
            super();
            this.name = _name;
            this.species = "cat";
            this.type = this.types[Math.round(Math.random() * 4)];
            this.food = "fish";
            this.sound = "meow";
            this.hunger = 5;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "caught a mouse.";
            this.isFed = true;
        }
    }
}