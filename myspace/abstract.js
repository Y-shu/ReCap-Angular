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
var Father = /** @class */ (function () {
    // father_property?:Property;
    function Father(name, age) {
        this.name = name;
        this.age = age;
        // this.father_property=father_property;
    }
    Father.prototype.showFatherDetails = function () {
        console.log("My Father : " + this.name + " and his age is " + this.age + " \n                    ");
    };
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, age, son_Name, son_Age, property) {
        var _this = _super.call(this, name, age) || this;
        _this.property = property;
        return _this;
    }
    Son.prototype.showProperty = function () {
        console.log("Property:\n        Having \n        " + this.property.propertyName + " propery and it's value is " + this.property.propertyValue + "!");
    };
    return Son;
}(Father));
var son = new Son("Hema Sundar", 55, "Sandeep", 29, {
    propertyName: "Bella-Vista",
    propertyValue: 100000
});
son.showFatherDetails();
son.showProperty();
