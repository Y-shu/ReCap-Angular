class Company1{
    // cName:string;
    // cAddress:string;

    constructor(public  Name:string,public Address:string){
        // this.cName = cName;
        // this.cAddress = cAddress;
    }
     static getDetails(){
         var a = 10;
         console.log(a);
         console.log(`get `);
    }
   
}
let company1 = new Company1("Shell","USA");
// company1.getDetails();

Company1.getDetails();

