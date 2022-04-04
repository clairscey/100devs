//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighter (charName, charSpecial, charStage, altColor, phrase) {
    this.name = charName
    this.special = charSpecial
    this.stage = charStage
    this.altColor = altColor
    this.phrase = phrase
    this.taunt = function () {
        alert(${this.phrase})
    }
}