// // Come up with with a parent class
// // Extend that parent class into two children
// // Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am ${this._name}, and I work on the ${this._role} team at #100Devs.`)
    }
}

class FrontEndDev extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    listTech(){
        console.log(`I'm proficient in ${this.tech.slice(0, this.tech.length - 1).join(', ')} and ${this.tech[this.tech.length - 1]}.`)
    }
}


class BackEndDev extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    listTech(){
        let techString = this.tech.reduce()
        console.log(`I'm proficient in ${this.tech.slice(0, this.tech.length - 1).join(', ')} and ${this.tech[this.tech.length - 1]}.`)
    }
}

let tom = new Contractor('Tom', 'Project Manager')
let jerry = new FrontEndDev('Jerry', 'Front End', ['HTML', 'CSS', 'Javascript'])
let moe = new BackEndDev('Moe', 'Back End', ['MongoDB', 'Node', 'React'])

let agency = [tom, jerry, moe]

for (person of agency){
    person.sayHello()
}

jerry.listTech()

console.log(tom.name)




















// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
