class StaticMotor {
    public name:string;
    //fixed only one time memory avaliable-they get memory at loading time
    //the below static variables will get global level / global object
    public static company:string="TATA COMPANY";
    public static type:string="STATIC";
    public wheels:number;
    public cost:number;
    private speed:string;
    constructor(name?:string,cost?:number,speed?:string){
        this.name = name;
        this.cost=cost;
        this.speed = speed;
        
    }
    public showMotor(){
        console.log(`
        Motor Details:
        Name : ${this.name} 
        Type: ${StaticMotor.type}
        Company:${StaticMotor.company}
        Cost:${this.cost}
        Speed:${this.speed}
        `);
    }
    //non-static data memebers are not allowed to use inside static method becoz those 
    //data memebers are  not given memeory at global level

    public static showStaticData():void{
        console.log(`
        Motor Details:
        Type: ${StaticMotor.type}
        Company:${StaticMotor.company}
        `);
        
    }
}
let sm1 = new StaticMotor("HSBC1",2000,"200rpm")
sm1.showMotor();
let sm2=new StaticMotor("HSBX1",3000,"100rpm")
sm2.showMotor();
//calling static method
StaticMotor.showStaticData();