let msg = "This is Global Message For Good!";
let data:string = "My String Data;";
// msg=true; // this wrong way of assigning like this as msg is declared as string
data="123";
msg = "String";
console.log(data+msg);

let user ; // any type as we didn't give any type to user
user = "String";
user = 123; // over rided value gets print...
console.log(user);
//.-----------------------------------------------------------------------
let message:string = "Good Morning!"; //string
let isUnderstood : boolean = true; //boolean
let Value:number = 12792; // number
let data2:undefined = undefined; //undefined
let data3:null = null; //null
//appending += 
message+='Have a Nice Day!';

console.log(message);
// -------------------------------------------------------------------------
// let ipList = []; //any type of array

let ipList:any = ["Sam",29,true,{}];
let list:string[] = ["Samul","Rahul","Raju"];
let numbers:number[] = [1,2,3,4,44];
//another way of declaring array  angular bracket is called generic
let numberL:Array<number> = [1,2,3,4];
let stringL:Array<string> = ["1","2","3","4"];
let stringO:Array<object> = [{},{}];

console.log(ipList);
console.log(list);
console.log(numbers);
console.log(numberL);
console.log(stringL);

let xyz:[string,number,object]
xyz =['hello',1456,{}];
xyz[0]='Sam';
console.log(xyz);
let users:any = ['Sam',78,true,{}];
let sample:object = {
    name:"Sample Name"
}
users.sample = sample;

// enum Ips {
//     FIRST,
//     SECOND,
//     THIRD,
//     FOURTH
// }
// console.log(Ips);
// let x : Ips = Ips.FIRST;
// console.log(x);

enum Ips {
        FIRST='192.0.0.8',
        SECOND='192.1.1.1',
        THIRD='198.1.1.1',
        FOURTH='192.0.0.1'
    }
    console.log(Ips);
    let x : Ips = Ips.FIRST;
    console.log(x);

enum color {
    Red=121,
    Blue,
    Blace
}
console.log(color);






