//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,6,7]
let result = nums.reduce( (sum, value) => sum += value)
alert(result)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareIt = arr => arr.map( value => value**2);
alert(squareIt(nums))
//Create a function that takes string
//Print the reverse of that string to the console
const stringReverser = str => {
    let reversed = str
    reversed = reversed.split('').reverse().join('');
    return reversed;
}
alert(stringReverser('redrum'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const checkPalindrome = str => str = stringReverser(str) ? 'Yes!' : 'No';
alert(checkPalindrome('racecab'))