interface Shirt{
    length:number;
    collar:number;
    //optional property
    design?:string;
    button?:number;
}
//instead of making dimention object type we are making Shirt type.
function stitch(dimention:Shirt){
    let length = dimention.length;
    let collarlength = dimention.collar;
    let design = dimention.design;
    let button = dimention.button;
    console.log(
        `Shirt Given Dimentions are : length : ${length} x collar : ${collarlength}
        x design : ${design} with buttons : ${dimention.button}`
    );
}
    stitch({
        length:30,
        collar:4,
        design:"Apple Cut",
        // button:5
    });
    stitch({
        length:30,
        collar:4,
        design:"Manly",
        button:4
        // design:1212, // design is of string
        // buttons:20 // not supposed to pass as it is not declared
    })
    
    

