var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // public name:string;
    // public company:string;
    // public price:number;
    // protected discount:number;
    function Vehicle(name, company, price, discount) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.discount = discount;
    }
    Vehicle.prototype.getVehicleDetails = function () {
        console.log("\n        The Vehicle is: " + this.name + ",\n        Vehicle company is : " + this.company + ",\n        Vehicle price is :" + this.price + ",\n        Vehicle has Discount of:" + this.discount);
    };
    return Vehicle;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWheeler.prototype.runs = function () {
        return this.speed + "km/hr";
    };
    //as it has a Discount which is of protected access modifier
    TwoWheeler.prototype.showDiscount = function () {
        return this.discount;
    };
    return TwoWheeler;
}(Vehicle));
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FourWheeler.prototype.runs = function () {
        return this.speed + "km/hr";
    };
    //as it has a Discount which is of protected access modifier
    FourWheeler.prototype.showDiscount = function () {
        return this.discount;
    };
    return FourWheeler;
}(Vehicle));
var twoWheeler = new TwoWheeler("TATA", "TATA", 200000, 20);
twoWheeler.getVehicleDetails();
twoWheeler.speed = 200;
// twoWheeler.runs();
console.log(twoWheeler.runs());
console.log(twoWheeler.showDiscount());
var fourWheeler = new FourWheeler("TATA ZEST", "TATA", 1000000, 10);
console.log(fourWheeler.getVehicleDetails());
