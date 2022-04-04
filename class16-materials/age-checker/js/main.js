//Create a conditonal that checks their age
// if (age < 16){
//     alert("You cannot drive")
// }else if(age < 18){
//     alert("You can't hate from outside the club because you can't even get in")
// }else if(age < 21){
//     alert("You can't get drunk")
// }else if(age < 25){
//     alert("You can't rent cars affordably")
// }else if(age < 30){
//     alert("You can't rent fancy cars affordably")
// }else alert("There's nothing to look forward to...unless you wanna be president one day")
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let h1Holder = document.querySelector("h1");
h1Holder.addEventListener("click", checkAge);
function checkAge(){
    let age = document.querySelector("#danceDanceRevolution").value;
    if (age < 16){
        alert("You cannot drive")
    }else if(age < 18){
        alert("You can't hate from outside the club because you can't even get in")
    }else if(age < 21){
        alert("You can't get drunk")
    }else if(age < 25){
        alert("You can't rent cars affordably")
    }else if(age < 30){
        alert("You can't rent fancy cars affordably")
    }else alert("There's nothing to look forward to...unless you wanna be president one day")
}