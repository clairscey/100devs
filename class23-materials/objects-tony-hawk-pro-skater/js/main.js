//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkater (name, style, specialMove, catchPhrase) {
    this.name = name
    this.style = style
    this.specialMove = specialMove
    this.catchPhrase = catchPhrase

    this.grind = function() {
        console.log('GRIIIIIIIND')
    }
    this.taunt = function() {
        console.log(this.catchPhrase)
    }
    this.special = function() {
        console.log(`Imma bust out my ${this.specialMove}`)
    }
}

let tonyHawk = new MakeSkater('Tony Hawk', 'Vert', 'The 900', 'Yes, I am Tony Hawk')