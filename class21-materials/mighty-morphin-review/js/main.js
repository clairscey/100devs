// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'halloween';
holiday = 'thanksgiving'.toUpperCase()
console.log(holiday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'hello there'
alert(string.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const doStuff = (num1, num2, num3, num4, num5) => alert(Math.abs(100 - (num1 + num2 + num3 + num4 + num5)))
doStuff(25,25,25,25,25)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const lowHigh = (num1, num2, num3) => console.log(Math.min(num1, num2, num3), Math.max(num1, num2, num3))
lowHigh(1,2,3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const headsOrTails = () => Math.random() > 0.5 ? 'heads' : 'tails'
headsOrTails()
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
const flipIt = num => {
    for (let i = 1; i <= num; i++){
        console.log(headsOrTails())
    }
}