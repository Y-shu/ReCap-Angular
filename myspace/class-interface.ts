class Color{
    color1:string;
    color2:string;
}
//inheritance
interface Paint extends Color{
    color3:string;
}
// let painting = new Paint();
let painting:Paint={
color1:"Blue",
color2:"Black",
color3:"Red"
}
console.log(painting);
