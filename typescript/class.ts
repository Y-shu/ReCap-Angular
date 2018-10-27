interface Shirt{
    length:number;
    collar:number;
    design:string;
    //optional property
    button?:number;
}
//let is a global it is not supposed to used inside class
//dont use a key word function inside class
class Tailor{
    //data members
    dimensions:Shirt;
    workers:string[];
    //function declaration
    stitch(dimensions):void{
       console.log(dimensions);
       
    }
    chooseWorker(name):void{
        console.log(name);
        
     }
    
}
//creating object
//just a reference variable - which refer to class type
//reference variable will not have a memory so we make an object to access class members
// let tailor: Tailor;

let tailor: Tailor= new Tailor();
tailor.stitch({
    length:20,
    collar:20,
    design:"Apple"
})
