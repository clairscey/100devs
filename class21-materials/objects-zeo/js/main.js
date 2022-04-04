//Create a stopwatch object that has four properties and three methods
let stopwatch = {}
stopwatch.color = 'black'
stopwatch.display = 'lcd'
stopwatch.currentTime = 24.4
stopwatch.brand = 'Seiko'

stopwatch.describe = function(){
    console.log(`This ${this.brand} watch is ${this.color} with a ${this.display} screen.`)
}
stopwatch.tellTime = function(){
    console.log(`The current time on the stopwatch is ${this.currentTime}.`)
}
stopwatch.resetTime = function(){
    this.currentTime = 0;
}