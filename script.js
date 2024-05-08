function Car(make, speed) {
    this.make = make;
    this.speed = speed;
    
    this.accelerate = function() {
        this.speed += 10;
        updateOutput(this.make, this.make + " is now going at " + this.speed + " km/h");
    };

    this.brake = function() {
        this.speed -= 5;
        updateOutput(this.make, this.make + " is now going at " + this.speed + " km/h");
    };
}

var car1 = new Car("BMW", 120);
var car2 = new Car("Mercedes", 95);

function updateOutput(make, message) {
    var outputDiv = document.getElementById("output" + make);
    outputDiv.innerHTML = message;
}

function accelerateCar1() {
    car1.accelerate();
}

function brakeCar1() {
    car1.brake();
}

function accelerateCar2() {
    car2.accelerate();
}

function brakeCar2() {
    car2.brake();
}