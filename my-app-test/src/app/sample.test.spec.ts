function helloWorld():string{
return " Hello World!"
}

//simple unit test(no need of external resources)
//describe(string,function)
describe("Hello World Suit",function(){
it("Say Hello to World",()=>{
   expect(helloWorld()).toEqual(" Hello World!");
});
it("Say Hello to World",()=>{
    expect(helloWorld()).toBe(" Hello World!");
 });
it("Say Hello to World",()=>{
    expect(helloWorld()).toContain(" Hello World!");
 });
});