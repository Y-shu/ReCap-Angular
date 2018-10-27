var message:string;
message = "Hello Good Morning";
console.log(message);

var value:number;
value = 1234;
console.log(value);

var bool:boolean;
bool = true;
console.log(bool);

var tuple : [string,number,string];
tuple = ['Yashu',26,'Good Girl'];
console.log(tuple);

var mymessage:string = `Hey! ${message} lets count ${value} and its ${bool}
                        that we live once! Welcome ${tuple}!!!`;
console.log(mymessage);

var list : number[]=[1,2,3,4];
console.log(list);

var listValue : Array<string> = ['Yashu','Hema','Ram'];
console.log(listValue);

var t : [string,number];
t=["yashu",12792];
console.log(t);
console.log(t[1]);

enum color {
    RED,
    GREEN,
    YELLOW,
    BLUE
}
console.log(color);

var c : color = color.GREEN;
console.log(c);

enum color1 {
    RED=123,
    GREEN,
    YELLOW,
    BLUE
}
console.log(color1);

//type assertion 

let someValue : any = "Hey Hello!";

let someNum : number = (<string>someValue).length;
console.log(someNum);

let num :any =1234;
let message1:string = `lets Count ${(<number>num)}! hahaha!`
console.log(message1);













