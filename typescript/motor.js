var Motor = /** @class */ (function () {
    function Motor(name, type, wheels) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
    }
    Motor.prototype.showMotor = function () {
        console.log('This is High-Tech Motor');
        console.log("Motor Details:\n        Name : " + this.name + " \n        Type: " + this.type + "\n        Wheels:" + this.wheels);
    };
    Motor.prototype.runMotor = function () {
        return "200km/hr" + this.speed;
    };
    return Motor;
}());
//constructor are used for initilization 
//new keyword related to memory management
//constructor with 0 arguments
var motor = new Motor("KTM", "Two Wheeler", 2);
motor.name = "KTM PRO";
motor.showMotor();
