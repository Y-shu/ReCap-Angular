class Bakery{
      name:string;
      type:string;
      color:string;

    constructor(name:string,type:string,color:string){
                this.name = name;
                this.type = type;
                this.color = color
      }
    display():void{
        console.log("Welcome to " +this.name+ " we serve food of type " +this.type) ;
    }

}
var bakery = new Bakery("MyBakery","Cakes","Red");
bakery.display();