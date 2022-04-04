// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "hot dog"
food = "tacos"
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let word = "sup"
alert(word[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const divideTwoAndMultiply = (num1, num2, num3) => alert((num1/num2)*num3)
divideTwoAndMultiply(2,3,2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRoot = (num) => console.log(num**(1/3));
cubeRoot(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const alertOnSummer = (month) => {
    monthLower = month.toLowerCase()
    if (monthLower === "june" || monthLower === "july"){
        alert("YAY")
    }else {
        alert("Boooo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const countWithoutFives = (num) => {
    for (let i = 1; i <= num; i++){
        if (i % 5 !== 0){
            console.log(i)
        }
    }
}