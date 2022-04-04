//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function stopSnacking() {
    let numberOfSnacks = Number(document.querySelector("input").value)
    document.querySelector("#stops").innerText = ""
    for (let i = 1; i <= numberOfSnacks; i++){
        document.querySelector("#stops").innerText += " Stop!";
    }
}

document.querySelector("#help").addEventListener("click", stopSnacking)