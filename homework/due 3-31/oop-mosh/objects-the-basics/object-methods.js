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

//There’s a ladder object that allows to go up and down:
let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };
  //Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
//Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
//My answer:
let ladder = {
    step: 0,
    up() {
      return this.step++;
    },
    down() {
      return this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

  ladder.up().up().down().showStep().down().showStep();