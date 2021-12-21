namespace FarmHeritage {
    export class Cat extends Animal {
        static types: string[] = ["Maine Coon", "Birman", "Bengal", "American Shorthair", "Sphynx"];

        constructor(_name: string) {
            super(_name, "cat", Cat.types[Math.round(Math.random() * 4)], "fish", "meow", 5, "caught a mouse.", true);
        }
    }
}