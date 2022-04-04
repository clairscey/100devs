// *Variables*
// Create a variable and console log the value
let a = 1;
console.log(a);
// Create a variable, add 10 to it, and alert the value
let b = 10;
b += 10;
alert(b);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(num1, num2, num3, num4){
    let difference = num1 - num2 - num3 - num4
    alert(difference)
}
// Create a function that divides one number by another and returns the remainder
function remainder(num1, num2){
    return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji50(num1, num2){
    let sum = num1 + num2;
    if (sum > 50){
        alert("Jumanji")
    }else alert("No Jumanji")
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeZebra(num1,num2,num3){
    let product = num1 * num2 * num3
    if (product % 3 == 0){
        alert("ZEBRA")
    }else alert("No ZEBRA")
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function sayItAgain(word, num){
    for (let i=0; i < num; i++){
        console.log(word);
    }
}