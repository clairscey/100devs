//Create a dog object that has four properties and three methods
const dog = {}
dog.isCute = true
dog.bark = 'WOOF'
dog.breed = 'Catahoula'
dog.name = 'Honey'

dog.describe = function() {
    console.log(`${this.name} is a ${this.breed} that ${this.isCute ? 'is' : 'is not'} cute.`)
}
dog.speak = function() {
    console.log(this.bark)
}