class Motor {
    name:string;
    type:string;
    wheels:number;
    cost:number;
    company:string;
    speed:string;
    constructor(name:string,type:string,wheels:number){
        this.name = name;
        this.type= type;
        this.wheels=wheels;
    }
    showMotor():void{
        console.log('This is High-Tech Motor');
        console.log(`Motor Details:
        Name : ${this.name} 
        Type: ${this.type}
        Wheels:${this.wheels}`);
        
        }
    runMotor():string{
        return "200km/hr"+this.speed;
    }
    // this.runMotor();
}
//constructor are used for initilization 
//new keyword related to memory management
//constructor with 0 arguments
let motor:Motor = new Motor("KTM","Two Wheeler",2);
//dynamically initilizing value to object
motor.name = "KTM PRO";
motor.showMotor();




