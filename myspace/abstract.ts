interface Property{
    propertyName:string;
    propertyValue:number;

}
abstract class Father{
    name?:string;
    age?:number;
    // father_property?:Property;
    constructor(name?:string,age?:number){
        this.name=name;
        this.age=age;
        // this.father_property=father_property;
     }
     showFatherDetails():any{
         console.log(`My Father : ${this.name} and his age is ${this.age} 
                    `);
         
     }

    abstract showProperty():void;
    // abstract getProperty():Property;


}
 class Son extends Father{
    son_Name:string;
    son_Age:number;
    property:Property;
    constructor(name:string,age:number,son_Name:string,son_Age:number,property?:Property){
         super(name,age)
         this.property = property;
    }
    showProperty():void{
        console.log(`Property:
        Having 
        ${this.property.propertyName} propery and it's value is ${this.property.propertyValue}!`);
        
    }

 
}
let son = new Son("Hema Sundar",55,"Sandeep",29,{
    propertyName:"Bella-Vista",
    propertyValue:100000
});
son.showFatherDetails();
son.showProperty();