interface User {
        userName:string,
        userAge:number,
        isMarriedU:boolean,
        userAddress:string,
        userSalary:number,
        showAge:()=>number
}
interface Employee{
    empName:string,
    empAge:number,
    isMarriedE:boolean,
    empAddress:string,
    empSalary:number
}

class Company {
   user:User
    emp:Employee;
 
setData(data){
this.user=data

}
setEmpData(empData){
    this.emp = empData
}
showDetails():void{
    console.log(this.user);
    // console.log(user.showAge());
        }
showDetailEmp():void{
    console.log(this.emp);
        }
printSalary(name,salary){
    console.log(`Hi ${name} your current salary is ${salary} `);
    }
}

let user1:Company = new Company();
user1.setData({
        userName:'Ram',
        userAge:40,
        isMarriedU:true,
        userAddress:"Madhapur",
        userSalary:30000
    })
let user2:Company = new Company();
user2.setData({
        userName:'Ramani',
        userAge:78,
        isMarriedU:true,
        userAddress:"Madhapur",
        userSalary:30000
    })
let emp:Company = new Company();
emp.setEmpData({
    empName:'Yashu',
        empAge:26,
        isMarriedE:false,
        empAddress:"Hitech-City",
        empSalary:80000
});

user1.showDetails();
user2.showDetailEmp();
emp.showDetailEmp();

emp.printSalary("Ramani",30000);



