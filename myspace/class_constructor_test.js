var Pinky = /** @class */ (function () {
    function Pinky() {
        this.a = 30;
        this.b = "Yashu";
    }
    Pinky.prototype.showDetails = function () {
        console.log("Hello!" + this.a + "and" + this.b + "!");
    };
    return Pinky;
}());
var pinky = new Pinky();
pinky.showDetails();
