namespace FarmHeritage {
    export class Pig extends Animal {
        static types: string[] = ["Tamworth", "Hereford", "Hampshire", "Duroc", "Angeln Saddleback"];

        constructor(_name: string) {
            super(_name, "pig", Pig.types[Math.round(Math.random() * 4)], "carrots", "oink", 9, "took a nice mudbath.", true);
        }
    }
}