namespace FarmHeritage {
    export class Dog extends Animal {

        constructor(_name: string) {
            let species: string = "dog";
            let type: string = "German Shepherd";
            let food: string = "meat";
            let sound: string = "woof";
            let hunger: number = 8;
            let special: string = "chased away the delivery man.";
            super(_name, species, type, food, sound, hunger, special);
        }
        
    }
}