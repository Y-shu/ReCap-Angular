interface Customer {
   name:string,
   email:string,

}
class Company {
   public name:string;
   public size:number;
   private income:number;
   private customer:Customer;
   //getter function
   public getIncome(){
       return this.income;
   }
   //setter function
   public setIncome(income:number){
       this.income = income;
   }
   public getCustomer(){
       return this.customer;
   }
   //only having with ECMAScript 5 and above 
   //so run using tsc filename.ts --target es5
   // public get Customer(){
//     return this.customer;
// }
   public setCustomer(customer:Customer){
       this.customer = customer;
   }
//    public set Customer(customer:Customer){
//     this.customer = customer;
// }
}

let company = new Company();
company.name = "XYZ Company";
company.size = 50;
company.setIncome(500000);
company.setCustomer({
    name:"ABC",
    email:"abcd@gmail.com"
});
var income = company.getIncome();
console.log("Income : "+income);
var customer = company.getCustomer();
console.log("Customer :"+customer);


