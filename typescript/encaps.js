var Company = /** @class */ (function () {
    function Company() {
    }
    //getter function
    Company.prototype.getIncome = function () {
        return this.income;
    };
    //setter function
    Company.prototype.setIncome = function (income) {
        this.income = income;
    };
    Company.prototype.getCustomer = function () {
        return this.customer;
    };
    Company.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    return Company;
}());
var company = new Company();
company.name = "XYZ Company";
company.size = 50;
company.setIncome(500000);
company.setCustomer({
    name: "ABC",
    email: "abcd@gmail.com"
});
var income = company.getIncome();
console.log("Income : " + income);
var customer = company.getCustomer();
console.log("Customer :" + customer);
