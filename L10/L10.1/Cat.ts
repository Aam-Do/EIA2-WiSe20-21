namespace FarmHeritage {
    export class Cat extends Animal {

        constructor(_name: string) {
            let species: string = "cat";
            let type: string = "Ragdoll";
            let food: string = "fish";
            let sound: string = "meow";
            let hunger: number = 5;
            let special: string = "caught a mouse";
            super(_name, species, type, food, sound, hunger, special);
        }
        
    }
}