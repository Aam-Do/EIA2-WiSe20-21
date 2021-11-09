"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Zelda", "Link", "Ganondorf", "Ruto", "Sheik", "Impa"];
    let verbs = ["loves", "hates", "destroys", "picks up", "is scared of", "finds"];
    let objects = ["the Triforce", "a cucco", "Saria", "the Master Sword", "rupees", "fire Keese"];
    for (let i = subjects.length; i > 0; i--) {
        let y = getVerse(subjects, verbs, objects);
        console.log(y);
    }
    function getVerse(_subjects, _verbs, _objects) {
        let verse = "";
        let randomSubject = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(randomSubject, 1)[0] + " ";
        let randomVerb = Math.floor(Math.random() * _verbs.length);
        verse += _verbs.splice(randomVerb, 1)[0] + " ";
        let randomObject = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(randomObject, 1)[0];
        return (verse);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=Script.js.map