// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'Sparkling Water'
favDrive = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = "Does this string contain apple?"
str.includes('apple')
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = _ => {
    let rand = Math.ceil(Math.random() * 3)
    switch(rand){
        case 1:
            return 'rock'
            break;
        case 2:
            return 'scissors'
            break
        case 3:
            return 'paper'
            break;
    }
}

rps()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRPS = playerChoice => {
    let compChoice = rps()
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors'){
        return 'Please enter a valid choice'
    }else if (playerChoice === compChoice){
        return 'It\'s a Draw'
    }else if (playerChoice === 'scissors' && compChoice === 'rock' ||playerChoice === 'rock' && compChoice === 'paper' || playerChoice === 'paper' && compChoice === 'scissors' ){
        return 'Computer wins!'
    }else return 'Player wins!'
}
playRPS('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGames(choices) {
    let results = Array.from(choices.forEach( choice => playRPS(choice)))
    return results
}

playGames(['rock', 'paper', 'rock'])