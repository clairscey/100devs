// *Variables*
// Declare a variable, assign it a value, and alert the value
let a = 5;
alert(a);
// Create a variable, divide it by 10, and console log the value
let b = 30;
console.log(b / 10);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(num1,num2,num3){
    let product = num1 * num2 * num3
    alert(product)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubtractTwo(num1, num2, num3, num4){
    let result = num1 + num2 - num3 - num4
    console.log(result)
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function areYouAWinner(num1, num2, num3){
    let result = (100 + num1 - num2) / num3
    if (result > 25){
        console.log("WE HAVE A WINNA!")
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayChecker(word){
    let day = word.toLowerCase()
    const daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    if (daysOfTheWeek.includes(day)){
        if (day == "sunday" || day == "saturday"){
            alert("weekend")
        }else alert("week day")
    }else alert("Try again!")
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
;