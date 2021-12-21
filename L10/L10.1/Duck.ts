namespace FarmHeritage {
    export class Duck extends Animal {
        static types: string[] = ["Northern Pintail", "King Eider", "Barrow's Goldeneye", "Ruddy Duck", "Velvet Scoter"];

        constructor(_name: string) {
            super(_name, "duck", Duck.types[Math.round(Math.random() * 4)], "seeds", "quack", 3, "bit the neighbor.", true);
        }
    }
}