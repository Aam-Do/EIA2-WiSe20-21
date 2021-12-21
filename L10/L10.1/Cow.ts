namespace FarmHeritage {
    export class Cow extends Animal {
        static types: string[] = ["Belted Galloway", "Charolais", "Dexter", "Hereford", "Scottish Highland"];

        constructor(_name: string) {
            super(_name, "cow", Cow.types[Math.round(Math.random() * 4)], "hay", "moo", 15, "produced " + Math.round((Math.random() * 45) + 5) + "l Milk.", true);
        }
    }
}