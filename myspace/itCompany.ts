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
class ItCompany {
      cName:string;
       cAddress:string;
       cEmpDetails:Employee ;

      //initilizing the variables of class
      constructor(cName:string,cAddress:string,cEmpDetails:Employee){
     //this keyword referes to current instance of class
        this.cName= cName;
        this.cAddress = cAddress;
       this.cEmpDetails =   cEmpDetails ;
        //  console.log(cEmpDetails);
         
      }
      getDetails():void{
        // console.log(this.cEmpDetails);
        console.log(`this is what i want ${this.cEmpDetails.name}`)
        console.log(`Hey Welcome to ${this.cName} which is in ${this.cAddress}`);        
    }
    
}




class EmpDetails extends ItCompany{
    eLocation:string;
    

      constructor(cName:string,cAddress:string,eLocation:string,cEmpDetails:Employee){
        super(cName,cAddress,cEmpDetails);
        
          
                    }
      getEmpDetails():void{
          console.log(`This is ${this.cEmpDetails.name}`);
     }
  
}

let x = new EmpDetails("mayur","address","hyderabad",{name:"hero",
email:"dfsd",salary:87,pfamount:87,domain:"wfw",isExperienced:true}) ; 

x.getEmpDetails() ;




// //instance creation of object from clsass
// var empDetails = new EmpDetails("Shell","New York","Banglore");
// //accessing attributes and functions 
// empDetails.getDetails();
// // empDetails.getEmpDetails();



