let n = 20;

for (let i = 1; i <= 10; i++, n++) {
    if (n % 2 === 0 && n % 3 ===0) {
        console.log(`${n} is divisible by 2 AND 3`);
    }else if (n % 2 === 0){
        console.log(`${n} is divisible by 2`);
    }else if (n % 3 === 0){
        console.log(`${n} is divisible by 3`);
    }else{
        console.log(`${n} is NOT divisible by 2 or 3`);
    }
}

prompt("Please enter a number ")
let n = prompt

