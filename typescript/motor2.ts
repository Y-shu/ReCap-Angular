class Motor2 {
    // name:string;
    // type:string;
    // wheels:number;
    // cost:number;
    // company:string;
    // speed:string;
    //once declared here no need of declaring inside class......
    constructor(private name?:string,public type?:string,public wheels?:number,
        public cost?:number,public company?:string,public speed?:string){
        this.name = name;
        this.type= type;
        this.wheels=wheels;
        this.cost=cost;
        this.company=company;
        this.speed = speed;
    }
    public showMotor():void{
        console.log('This is High-Tech Motor');
        console.log(`Motor Details:
        Name : ${this.name} 
        Type: ${this.type}
        Wheels:${this.wheels}
        Company:${this.company}
        `);
        
        }
}
let moto2 = new Motor2("HONDA CITY");
Motor2.showMotor();