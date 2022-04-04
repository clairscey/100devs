// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let myString = 'Is this a question?'
if (myString.includes('?')) {
    alert('It\'s a question')
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let someWords = 'Some people say jr. dev, but I prefer the term software engineer'
console.log(someWords.replace('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = () => {
    let rand = Math.floor( Math.random() * 3 )
    switch (rand){
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRPS = (playerChoice) =>{
    let compChoice = rps()
    if (playerChoice == compChoice){
        console.log('It\'s a tie')
    }else if ( (playerChoice == 'rock' && compChoice == 'scissors') || (playerChoice == 'scissors' && compChoice == 'paper') || (playerChoice == 'paper' && compChoice == 'rock')){
        console.log('Player wins!')
    }else {
        console.log('Computer wins!')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const playGames = (arr) => {
    arr.forEach( value => playRPS(value))
}

playGames(['rock', 'paper', 'scissors'])