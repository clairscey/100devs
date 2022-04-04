//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [2,3,4,5,6,7]
alert(nums.reduce( (a, v) => a += v, 0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareNums = arr => arr.map( v => v**2)
console.log(squareNums(nums))
//Create a function that takes string
//Print the reverse of that string to the console
const reverseYourString = str => str.split('').reverse().join('')
console.log(reverseYourString('beat'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const checkReversed = str => (str === reverseYourString(str)) ? alert('IT IS') : alert('NOT A PALINDROME')
checkReversed('racecar')
checkReversed('bear')