//Write your pseduo code first! 
//get temperature, calculate conversion, output converted temperature


document.querySelector("#toF").addEventListener('click', toF)

document.querySelector("#toC").addEventListener('click', toC)

function toF() {
    const temp = document.querySelector('#temp').value;
    const tempF = (temp * 9/5) + 32;
    document.querySelector("#placeForTemp").innerText = tempF
}

function toC() {
    const temp = document.querySelector('#temp').value;
    const tempC = (temp - 32) * 5/9;
    document.querySelector("#placeForTemp").innerText = tempC
}