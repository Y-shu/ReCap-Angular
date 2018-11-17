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
var Company = /** @class */ (function () {
    function Company(cName, cAddress) {
        this.cName = cName;
        this.cAddress = cAddress;
    }
    Company.prototype.getDetails = function () {
        console.log(this.cName + " & " + this.cAddress);
    };
    return Company;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(cName, cAddress, eName, eAge) {
        var _this = _super.call(this, cName, cAddress) || this;
        _this.eName = eName;
        _this.eAge = eAge;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("hey welcome to " + this.cName + " which is in " + this.cAddress + " and you \n      " + this.eName + " working with us !");
    };
    return Employee;
}(Company));
var company = new Company("Shell", "Australia");
company.getDetails();
var employee = new Employee("Shell", "Australia", "yashu", 26);
console.log(employee);
// employee.eAge = 26;
employee.display();
