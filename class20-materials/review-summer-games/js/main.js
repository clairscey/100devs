//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
const multiplyArray = (arr) => {
    let product = arr[0]
    for (let i = 1; i < arr.length; i++){
        product *= arr[i]
    }
    alert(product)
}

const arrayThings = (arr) =>{

let result = arr.reduce((a, b) => a * b)
alert(result)
}