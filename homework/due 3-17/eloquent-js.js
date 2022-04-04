//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
const range = (start, end, step) => {
    let nums = []
    for (let i = start; i <= end;){
        nums.push(i)
        if (step !== undefined){
            i += step
        }else i++
    }
    return nums
}

const sum = (nums) => nums.reduce( (a,b) => a+b)

//For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

