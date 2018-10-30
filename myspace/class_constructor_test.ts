class Pinky{
    a:number = 30;
    b:string ="Yashu";
    showDetails():void{
        console.log(`Hello!${this.a}and${this.b}!`);
        
    }
}
let pinky = new Pinky();
pinky.showDetails();

let pinky1 = new Pinky();
pinky1.showDetails();