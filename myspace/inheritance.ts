//parent class
class Company{
    cName:string;
    cAddress:string;

    constructor(cName:string,cAddress:string){
        this.cName = cName;
        this.cAddress = cAddress;
    }
    getDetails():void{
        console.log(`${this.cName} & ${this.cAddress}`)
    }
   
}
//child class 
//child class extends parents class

class Employee extends Company{
    eName:string;
    eAge?:number;
    constructor(cName:string,cAddress:string,eName:string,eAge:number){
    super(cName,cAddress);
    this.eName=eName;
    this.eAge = eAge;
    }

    display():void{
      console.log(`hey welcome to ${this.cName} which is in ${this.cAddress} and you 
      ${this.eName} working with us !`);
      }


}
let company = new Company("Shell","Australia")
company.getDetails();

let employee = new Employee("Shell","Australia","yashu",26);
console.log(employee);
// employee.eAge = 26;
employee.display();
