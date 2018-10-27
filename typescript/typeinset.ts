let list1 ;
list1 = [1,2,3,4,5];
var listLength = (list1 as number[]).length;
console.log(listLength);

var sample1;

sample1 = "String";
(sample1 as string).concat("sasa");
(<string>sample1).charAt(2);
console.log(sample1);


var listLength=(<Array<number>>list1).length;
console.log(listLength);

