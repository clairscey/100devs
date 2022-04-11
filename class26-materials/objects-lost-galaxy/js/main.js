//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.topping1 = 'pepperoni'
pizza.topping2 = 'sausage'
pizza.cheeseType = 'mozzarella'
pizza.size = 'large'
pizza.numSlices = 8

pizza.takeBite = function() {
    this.numSlices--
}
