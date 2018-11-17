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
//class -- which encapsulate data for objects
var ItCompany = /** @class */ (function () {
    //initilizing the variables of class
    function ItCompany(cName, cAddress, cEmpDetails) {
        //this keyword referes to current instance of class
        this.cName = cName;
        this.cAddress = cAddress;
        this.cEmpDetails = cEmpDetails;
        //  console.log(cEmpDetails);
    }
    ItCompany.prototype.getDetails = function () {
        // console.log(this.cEmpDetails);
        console.log("this is what i want " + this.cEmpDetails.name);
        console.log("Hey Welcome to " + this.cName + " which is in " + this.cAddress);
    };
    return ItCompany;
}());
var EmpDetails = /** @class */ (function (_super) {
    __extends(EmpDetails, _super);
    function EmpDetails(cName, cAddress, eLocation, cEmpDetails) {
        return _super.call(this, cName, cAddress, cEmpDetails) || this;
    }
    EmpDetails.prototype.getEmpDetails = function () {
        console.log("This is " + this.cEmpDetails.name);
    };
    return EmpDetails;
}(ItCompany));
var x = new EmpDetails("mayur", "address", "hyderabad", { name: "hero",
    email: "dfsd", salary: 87, pfamount: 87, domain: "wfw", isExperienced: true });
x.getEmpDetails();
// //instance creation of object from clsass
// var empDetails = new EmpDetails("Shell","New York","Banglore");
// //accessing attributes and functions 
// empDetails.getDetails();
// // empDetails.getEmpDetails();
