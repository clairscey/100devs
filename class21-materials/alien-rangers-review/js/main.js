//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["LOST", "WandaVisio", "Always Sunny"]
tvShows.forEach(value => console.log(value))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5]
const showNums = array => nums.filter( value => !(value % 2))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const addACouple = arr => {
    let sorted = arr.sort( (a, b) => a - b )
    return sorted[1] + sorted[sorted.length-2]
}