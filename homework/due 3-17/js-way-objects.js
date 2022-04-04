const Aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    //returns a character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this.xp} experience points, and ${this.strength} strength value`;
    }
};

const Honey = {
    name: "Honey",
    species: "lab mix",
    size: 70,

    bark() {
        return "WOOOF"
    }
}

const r = Number (prompt("Enter the circle radius:"))
const circle = {
    radius: r,

    circumference() {
        return 3.14 * 2 * r
    },

    area() {
        return 3.14 * r ** 2
    }
}

const account = {
    name: "Alex",
    balance: 0,
    
    credit(num) {
        this.balance += num;
    },

    describe() {
        return `This account is owned by ${this.name} and has a balance of $${this.balance}.`
    }
}