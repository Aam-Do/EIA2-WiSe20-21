namespace RandomPoem {

    let subjects: string[] = ["Zelda", "Link", "Ganondorf", "Ruto", "Sheik", "Impa"]
    let verbs: string[] = ["loves", "hates", "destroys", "picks up", "is scared of", "finds"]
    let objects: string[] = ["the Triforce", "a cucco", "Saria", "the Master Sword", "rupees", "fire Keese"]
    

    for (let i = subjects.length; i > 0; i--) {
        let y: string = getVerse(subjects, verbs, objects);
        console.log(y);
    }

    function getVerse(_subjects:string[], _verbs:string[], _objects:string[]): string {

        let verse: string = "";
        let randomSubject:number = Math.floor(Math.random()*_subjects.length);
        verse += _subjects.splice(randomSubject, 1)[0] + " ";
        let randomVerb:number = Math.floor(Math.random()*_verbs.length);
        verse += _verbs.splice(randomVerb, 1)[0] + " ";
        let randomObject:number = Math.floor(Math.random()*_objects.length);
        verse += _objects.splice(randomObject, 1)[0];

        return(verse);
    }
}
