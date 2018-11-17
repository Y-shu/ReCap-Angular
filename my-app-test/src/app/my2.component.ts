export class MyComponent {
    concatStr(str):string{
        return "Hello "+str+" !";
    }
    users=["John","Sam","Mike"];
    getUsers(){
        return this.users;
    }
}