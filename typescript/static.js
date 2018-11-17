var StaticMotor = /** @class */ (function () {
    function StaticMotor(name, cost, speed) {
        this.name = name;
        this.cost = cost;
        this.speed = speed;
    }
    StaticMotor.prototype.showMotor = function () {
        console.log("\n        Motor Details:\n        Name : " + this.name + " \n        Type: " + StaticMotor.type + "\n        Company:" + StaticMotor.company + "\n        Cost:" + this.cost + "\n        Speed:" + this.speed + "\n        ");
    };
    StaticMotor.showStaticData = function () {
        console.log("\n        Motor Details:\n        Type: " + StaticMotor.type + "\n        Company:" + StaticMotor.company + "\n        ");
    };
    //fixed only one time memory avaliable-they get memory at loading time
    //the below static variables will get global level
    StaticMotor.company = "TATA COMPANY";
    StaticMotor.type = "STATIC";
    return StaticMotor;
}());
var sm1 = new StaticMotor("HSBC1", 2000, "200rpm");
sm1.showMotor();
var sm2 = new StaticMotor("HSBX1", 3000, "100rpm");
sm2.showMotor();
//calling static method
StaticMotor.showStaticData();
