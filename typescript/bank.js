var records = [{
        accountId: "A1234",
        name: "John",
        age: 20,
        balance: 1235,
        email: "john@gmail.com",
        loan: 50000
    }];
/* A common error experienced by beginning J.S developers
is that for..in for an array does not iterate over the array
items. Instead it iterates over the keys of the object passed in. */
//var someArray = [9,2,5];
//for(var item in someArray){
//     console.log(item);
// } // the above functionality gives 0,1,2 index values
//var someArray =[9,2,5];
//for(var item of someArray){
// console.log(item);
// }  // the above functionality gives 
//function is returning something of object type
var findUser = function (accountId) {
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var account = records_1[_i];
        if (account.accountId == accountId) {
            console.log(account);
            return account;
        }
        else {
            console.log({ message: "Account Not Found" });
        }
    }
};
//when function wont return any value void
var showBalance = function (accountId) {
    var user = findUser(accountId);
    console.log("\n    Hi User Data : " + user.accountId + "\n    ");
};
showBalance("A1234");
var loan = function (accountId) {
    var user1 = findUser(accountId); //if keeping object in place of any its not working
    //why????????????????????????????
    console.log(user1.name);
    if (user1.name == "John") {
        console.log(user1);
        console.log("User with : " + user1.accountId + " is " + user1.name + " issued loan of amount " + user1.loan + "!");
    }
    else {
        console.log("User Details not found!");
    }
};
loan("A1234");
// loan("John");
/*When function never returns anything but throws an error "never" we use throw to terminate
this function somewhere*/
// function users1():never{
//     throw new Error ("new Error");
// }
