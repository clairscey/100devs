/*Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.*/

const musketeerPlay = () => {
    let musketeers = ["Athos", "Porthos", "Aramis"]
    for (let i = 0; i < musketeers.length; i++){
        console.log(musketeers[i]);
    }
    musketeers.push("D'Artagnan")
    musketeers.forEach(musketeer => console.log(musketeer))
    musketeers.splice(2, 1)
    for (const musketeer of musketeers){
        console.log(musketeer)
    }
}

//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const addUp = (values) => {
let sum = 0;
values.forEach((value) => {
    sum += value
})
console.log(sum)
}

//Write a program that creates the following array, then calculates and shows the array's maximum value.
const findMax = () => {
const values = [3, 11, 7, 2, 9, 10]
let maxValue = -Infinity;
for (let i = 0; i < values.length; i++){
    if (values[i] > maxValue){
        maxValue = values[i];
    }
}
console.log(maxValue)
}

//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

const sayUntilStop = (stop) => {
    let words = []
    while (words[words.length - 1] != stop){
    let currentWord = prompt(`Enter a word. Type "${stop}" to stop.`)
    words.push(currentWord)
    }
words.pop()
console.log(words)
}