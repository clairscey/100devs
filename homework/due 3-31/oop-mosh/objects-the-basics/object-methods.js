//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.
let calculator = {
    value1: 0,
    value2: 0,
    read(){
        this.value1 = Number(prompt('Enter a value'));
        this.value2 = Number(prompt('Enter a value'));
    },
    sum(){
        return this.value1 + this.value2;
    },
    mul(){
        return this.value1 * this.value2;
    }
}

