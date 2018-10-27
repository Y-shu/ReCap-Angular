var msg = "This is Global Message For Good!";
var data = "My String Data;";
// msg=true; // this wrong way of assigning like this as msg is declared as string
data = "123";
msg = "String";
console.log(data + msg);
var user; // any type as we didn't give any type to user
user = "String";
user = 123; // over rided value gets print...
console.log(user);
//.-----------------------------------------------------------------------
var message = "Good Morning!"; //string
var isUnderstood = true; //boolean
var Value = 12792; // number
var data2 = undefined; //undefined
var data3 = null; //null
//appending += 
message += 'Have a Nice Day!';
console.log(message);
// -------------------------------------------------------------------------
// let ipList = []; //any type of array
var ipList = ["Sam", 29, true, {}];
var list = ["Samul", "Rahul", "Raju"];
var numbers = [1, 2, 3, 4, 44];
//another way of declaring array  angular bracket is called generic
var numberL = [1, 2, 3, 4];
var stringL = ["1", "2", "3", "4"];
var stringO = [{}, {}];
console.log(ipList);
console.log(list);
console.log(numbers);
console.log(numberL);
console.log(stringL);
var xyz;
xyz = ['hello', 1456, {}];
xyz[0] = 'Sam';
console.log(xyz);
var users = ['Sam', 78, true, {}];
var sample = {
    name: "Sample Name"
};
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
var Ips;
(function (Ips) {
    Ips["FIRST"] = "192.0.0.8";
    Ips["SECOND"] = "192.1.1.1";
    Ips["THIRD"] = "198.1.1.1";
    Ips["FOURTH"] = "192.0.0.1";
})(Ips || (Ips = {}));
console.log(Ips);
var x = Ips.FIRST;
console.log(x);
var color;
(function (color) {
    color[color["Red"] = 121] = "Red";
    color[color["Blue"] = 122] = "Blue";
    color[color["Blace"] = 123] = "Blace";
})(color || (color = {}));
console.log(color);
