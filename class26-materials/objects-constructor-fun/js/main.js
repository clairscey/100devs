//Create a pizza constructor with 4 properties and 3 methods
function MakePizza(toppings, cheeseType, size, slicesRemaining){
    this.toppings = toppings
    this.cheeseType = cheeseType
    this.size = size
    this.slicesRemaining = slicesRemaining

    this.eatSlice = function(){
        this.slicesRemaining--
        console.log(this.slicesRemaining)
    }
    this.describePizza = function(){
        console.log(`You have a ${this.size} pizza with ${this.toppings.join(', ')} and ${this.cheeseType}. It has ${this.slicesRemaining} slices left, so eat up!`)
    }
    this.slicesPerPerson = function(friends){
        console.log(`Each person can have ${this.slicesRemaining / friends} slices.`)
    }

}

let pizza = new MakePizza(['sausage', 'ham', 'pepperoni'], 'mozzarella', 'large', 8)