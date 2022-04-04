//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);

circle.draw()

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

//Exercise
//new Stopwatch, reset, start, stop methods. Cannot call start/stop twice in a row. duration property.

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running){
            throw new Error('Stopwatch has already started.')
        };
        startTime = new Date();
        running = true;
    };

    this.stop = function() {
        if (!running){
            throw new Error('Stopwatch is not started.')
        }
        endTime = new Date();
        running = false;
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        duration = 0
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    })
}