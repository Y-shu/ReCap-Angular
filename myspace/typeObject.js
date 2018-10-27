var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greeting = function () {
        console.log("Hello EveryOne!");
    };
    Greeting.prototype.color = function () {
        console.log("East or West Black is Best!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greeting();
var obj1 = new Greeting();
obj1.color();
