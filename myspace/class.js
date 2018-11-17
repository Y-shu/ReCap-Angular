var Bakery = /** @class */ (function () {
    function Bakery(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    Bakery.prototype.display = function () {
        console.log("Welcome to " + this.name + " we serve food of type " + this.type);
    };
    return Bakery;
}());
var bakery = new Bakery("MyBakery", "Cakes", "Red");
bakery.display();
