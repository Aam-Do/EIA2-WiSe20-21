var RandomPoem;
(function (RandomPoem) {
    var subjects = ["Zelda", "Link", "Ganondorf", "Ruto", "Sheik", "Impa"];
    var verbs = ["loves", "hates", "destroys", "picks up", "is scared of", "finds"];
    var objects = ["the Triforce", "a cucco", "Saria", "the Master Sword", "rupees", "fire Keese"];
    for (var i = subjects.length; i > 0; i--) {
        var y = getVerse(subjects, verbs, objects);
        console.log(y);
    }
    function getVerse(_subjects, _verbs, _objects) {
        var verse = "";
        var randomSubject = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(randomSubject, 1)[0] + " ";
        var randomVerb = Math.floor(Math.random() * _verbs.length);
        verse += _verbs.splice(randomVerb, 1)[0] + " ";
        var randomObject = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(randomObject, 1)[0];
        return (verse);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=Script.js.map