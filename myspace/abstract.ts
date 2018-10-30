// interface Property{
//     property:string;
//     propertyValue:number;

// }
abstract class Father{
    name?:string;
    age?:number;
    // father_property?:Property;
    constructor(name?:string,age?:number){
        this.name=name;
        this.age=age;
        // this.father_property=father_property;
     }
     showFatherDetails():void{
         console.log(`My Father : ${this.name} and his age is ${this.age} 
                    `);
         
     }

    abstract showProperty():void;
    // abstract getProperty():Property;


}
 class Son extends Father{
    son_Name:string;
    son_Age:number;
    constructor(name:string,age:number,son_Name:string,son_Age:number){
         super(name,age)
    }
    showProperty():void{
        console.log(`Property:
        ${this.name} is my father and he is ${this.age} years old!`);
        
    }

 
}
let son = new Son("Hema Sundar",55,"Sandeep",29);
son.showFatherDetails();
son.showProperty();