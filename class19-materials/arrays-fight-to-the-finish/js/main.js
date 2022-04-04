//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Fight Club", "The Batman", "Queen and Slim"]
movies.forEach((value) => document.querySelector("h2").innerText += value)
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [2, 3, 4, 5, 6, 7, 8]
nums.forEach((_, index) => nums[index] += 3)
console.log(nums)

//Find the average of all the numbers from question three
let numsSum = 0
nums.forEach((value) => numsSum += value)
console.log(numsSum/nums.length);