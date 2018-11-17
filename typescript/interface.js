var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.generateCotation = function () {
        this.cotationTotal = (this.area * 50) + (this.area * 150) + (this.area * 30);
        return "Ur Generated Cotation is:\n        Hall : " + this.area * 50 + "\n        Kitchen : " + this.area * 150 + "\n        Dining : " + this.area * 30;
    };
    Customer.prototype.makeHouse = function () {
        if (this.cotationTotal < this.budget) {
            return "We can make your house with " + this.cotationTotal;
        }
        else {
            return "Sir/Mam Plz Increase your budget till " + this.cotationTotal;
        }
    };
    return Customer;
}());
var customer1 = new Customer();
customer1.type = "Full House";
customer1.area = 200;
customer1.budget = 100000;
var cotation = customer1.generateCotation();
console.log(cotation);
var result = customer1.makeHouse();
console.log(result);
var customer2 = new Customer();
customer2.type = "Full House";
customer2.area = 1000;
customer2.budget = 10000;
var cotation = customer2.generateCotation();
console.log(cotation);
var result = customer2.makeHouse();
console.log(result);
