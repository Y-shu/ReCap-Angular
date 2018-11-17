var Motor2 = /** @class */ (function () {
    // name:string;
    // type:string;
    // wheels:number;
    // cost:number;
    // company:string;
    // speed:string;
    //once declared here no need of declaring inside class......
    function Motor2(name, type, wheels, cost, company, speed) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;
    }
    Motor2.prototype.showMotor = function () {
        console.log('This is High-Tech Motor');
        console.log("Motor Details:\n        Name : " + this.name + " \n        Type: " + this.type + "\n        Wheels:" + this.wheels + "\n        Company:" + this.company + "\n        ");
    };
    return Motor2;
}());
var moto2 = new Motor2("HONDA CITY");
Motor2.showMotor();
