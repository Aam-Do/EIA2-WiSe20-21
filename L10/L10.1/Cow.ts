namespace FarmHeritage {
    export class Cow extends Animal {

        constructor(_name: string) {
            let species: string = "cow";
            let type: string = "Belted Galloway";
            let food: string = "hay";
            let sound: string = "moo";
            let hunger: number = 15;
            let special: string = "produced " + Math.round((Math.random() * 45) + 5) + "l Milk";
            super(_name, species, type, food, sound, hunger, special);
        }
        
    }
}