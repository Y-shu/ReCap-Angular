abstract class Coloring{
    coloring1:string;
    coloring2:string;
    constructor(coloring1:string,coloring2:string){
        this.coloring1=coloring1;
        this.coloring2=coloring2;
    }
    // showDetails():void{
    //     console.log(`${this.coloring1},${this.coloring2}`);
    //     }
    abstract reuse(coloring1:string,coloring2:string);
    
}

class Pinku extends Coloring{
    sheets:number;
    
    constructor(coloring1:string,coloring2:string,sheets:number){
      super(coloring1,coloring2)
      this.sheets=sheets;
    }
    reuse(coloring1:string,coloring2:string){
     console.log(`${this.coloring1},${this.coloring2},${this.sheets}`);
     
    }
}
let a= new Pinku('blue',"pink",10);
console.log(a);