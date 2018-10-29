interface Interior{
    type:string;
    area:number;
    budget:number;
    generateCotation():string;
    makeHouse():string;
}
class Customer implements Interior{
    type:string;
    area:number;
    budget:number;
    cotationTotal:number;
    generateCotation():string{
        this.cotationTotal = (this.area * 50)+(this.area * 150)+(this.area * 30);
        return `Ur Generated Cotation is:
        Hall : ${this.area * 50}
        Kitchen : ${this.area * 150}
        Dining : ${this.area * 30}`
    }
    makeHouse():string{
        if(this.cotationTotal< this.budget){
            return "We can make your house with "+this.cotationTotal;
        }else{
            return "Sir/Mam Plz Increase your budget till "+this.cotationTotal;
        }
       
    }
}
let customer1 = new Customer();
customer1.type = "Full House";
customer1.area = 200;
customer1.budget = 100000;
var cotation = customer1.generateCotation();
console.log(cotation);
var result= customer1.makeHouse();
console.log(result);

let customer2 = new Customer();
customer2.type = "Full House";
customer2.area = 1000;
customer2.budget = 10000;
var cotation = customer2.generateCotation();
console.log(cotation);
var result= customer2.makeHouse();
console.log(result);
