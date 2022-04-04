//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// const giveMeEvens = (arr) => {
//     return arr.map((value, index) => {
//         if (arr[index] % 2 === 0){
//             return arr[index]
//         }else return
//     })
// }

const giveMeEvens = (arr) => {
    let evens = []
    arr.forEach(value => {
        if (value % 2 === 0){
            evens.push(value)
        }
    })
    return evens
}

