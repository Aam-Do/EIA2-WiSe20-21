namespace FarmHeritage {
    export class Dog extends Animal {
        static types: string[] = ["German Shepherd", "Welsh Corgi", "Jack-Russell Terrier", "Golden Retriever", "Toy Poodle"];

        constructor(_name: string) {
            super(_name, "dog", Dog.types[Math.round(Math.random() * 4)], "meat", "woof", 8, "chased away the mailman.", true);
        }
    }
}