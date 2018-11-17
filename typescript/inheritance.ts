class Vehicle{
    // public name:string;
    // public company:string;
    // public price:number;
    // protected discount:number;
constructor(public name:string,private company:string,
    public price:number,protected discount:number){

    }
    getVehicleDetails():void{
        console.log(`
        The Vehicle is: ${this.name},
        Vehicle company is : ${this.company},
        Vehicle price is :${this.price},
        Vehicle has Discount of:${this.discount}`);
        
    }
}
class TwoWheeler extends Vehicle{
    public color : string;
    public speed :number;
    constructor(color?:string,speed?:number,){
        
        //super call instantiate super class
        super("TATA","TATA",200000,20)
        this.color = color;
        this.speed = speed;
    }
    public runs():string{
        return this.speed + "km/hr";
    }
    //as it has a Discount which is of protected access modifier
    public showDiscount():number{
        return this.discount;
    }
}
class FourWheeler extends Vehicle{
    public color : string;
    public speed :number;
    public runs():string{
        return this.speed + "km/hr";
    }
    //as it has a Discount which is of protected access modifier
    public showDiscount():number{
        return this.discount;
    }
}
let twoWheeler = new TwoWheeler();
twoWheeler.getVehicleDetails();
twoWheeler.speed=200;
// twoWheeler.runs();
console.log(twoWheeler.runs());
console.log(twoWheeler.showDiscount());

let fourWheeler = new FourWheeler("TATA ZEST","TATA",1000000,10);
console.log(fourWheeler.getVehicleDetails());

