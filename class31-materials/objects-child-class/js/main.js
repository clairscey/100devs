//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Bear extends Animal{
    constructor(name, favoriteFood){
        super(name)
        this.favoriteFood = favoriteFood
    }
}

let pooh = new Dog('Sun Bear', 'Honey')