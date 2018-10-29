//interface
interface Employee{
    name:string;
    email:string;
    salary:number;
    pfamount:number;
    domain:string;
    isExperienced:boolean;
    // getDetails:()=>string
}

//class -- which encapsulate data for objects
class ItCompany{
      cName:string;
       cAddress:string;
      cEmpDetails:Employee;
      //initilizing the variables of class
      constructor(cName:string,cAddress:string){
     //this keyword referes to current instance of class
        this.cName= cName;
        this.cAddress = cAddress;
        
        
        
      }
      getDetails():void{
        console.log(`Hey Welcome to ${this.cName} which is in ${this.cAddress}`);
    }
}

class EmpDetails extends ItCompany{
    eLocation:string;
    
    
      constructor(cName:string,cAddress:string,eLocation:string){
        super(cName,cAddress);
          this.eLocation=eLocation;
          
                    }
    //   getEmpDetails():void{
    //       console.log(`This is ${this.name}`);
   //   }
  
}
//instance creation of object from clsass
var empDetails = new EmpDetails("Shell","New York","Banglore");
//accessing attributes and functions 
empDetails.getDetails();
// empDetails.getEmpDetails();



