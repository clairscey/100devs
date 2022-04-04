function showMultTable(){
    let n = prompt("enter a number between 2 and 9");
   while (n<2 || n>9){
     n = prompt("enter a number between 2 and 9")
   }
   for (let i=1; i<11; i++){
  console.log(`${n} x ${i} = ${n*i}`)
  }
}

// function testingSomething() {
//     let a = 1
//     for(let i=1;i<10;i++){
//         a = a+i;
//         console.log(a)
//     }
//     return a;
// }

// function squareSum(numbers){
//     let length = numbers.length;
//     let sum = 0;
//     for(let i = 0; i < length; i++){
//         sum = sum + numbers[i]**2;
//     }
//     return sum;
// }