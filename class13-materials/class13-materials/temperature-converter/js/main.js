//Write your pseduo code first! 
/* 
-get the temp in F
-assign to a variable
-make sure the variable is a number
-run math operations on number
-assign result to a new variable
-output new variable */

document.querySelector('#submit').addEventListener('click', tempConvert)

function tempConvert() {
    const temp = document.querySelector('#temp').value;


    const convertedTemp = (temp - 32) * 5/9;


    document.querySelector('#placeForTemp').innerText = convertedTemp;

}