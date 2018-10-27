var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.setData = function (data) {
        this.user = data;
    };
    Company.prototype.setEmpData = function (empData) {
        this.emp = empData;
    };
    Company.prototype.showDetails = function () {
        console.log(this.user);
        // console.log(user.showAge());
    };
    Company.prototype.showDetailEmp = function () {
        console.log(this.emp);
    };
    Company.prototype.printSalary = function (name, salary) {
        console.log("Hi " + name + " your current salary is " + salary + " ");
    };
    return Company;
}());
var user1 = new Company();
user1.setData({
    userName: 'Ram',
    userAge: 40,
    isMarriedU: true,
    userAddress: "Madhapur",
    userSalary: 30000
});
var user2 = new Company();
user2.setData({
    userName: 'Ramani',
    userAge: 78,
    isMarriedU: true,
    userAddress: "Madhapur",
    userSalary: 30000
});
var emp = new Company();
emp.setEmpData({
    empName: 'Yashu',
    empAge: 26,
    isMarriedE: false,
    empAddress: "Hitech-City",
    empSalary: 80000
});
user1.showDetails();
user2.showDetailEmp();
emp.showDetailEmp();
emp.printSalary("Ramani", 30000);
