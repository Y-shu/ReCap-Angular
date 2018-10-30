interface Parents{
    father:string,
    mother:string
}
abstract class Student{
    //  public name;
    //  public division;
    //  private marks:number;
    constructor(public name:string,public division:string,private marks:number){

    }
     //method with implemmentation
     public getMarks():number{
        return this.marks;
     }
     public setMarks(marks):void{
        this.marks=marks;
     }
     abstract arrangeParentMeet():void ;
     abstract showResults():string;
}

class John extends Student{
    public parents;
    constructor(name:string,division:string,marks:number,parents:Parents){
              super(name,division,marks);
              this.parents = parents;
    }
    arrangeParentMeet():void{
        console.log("Meeting with Parents : :");
        console.log(`Parents Data
        Father: ${this.parents.father}
        Mother: ${this.parents.mother}`);
    }
    showResults():string{
        return "Pass";
    }
    //child own method
    wantReward():string{
        return "Make me Property Owner!";
    }
}
let john = new John("Yashu","A",99,{
    father:"Hema Sundar",
    mother:"Supuu Darling"
});
john.arrangeParentMeet();
john.showResults();
john.wantReward();
