import { addition,substraction,InCounter} from './my.component';
describe("The Addition Suit!",()=>{
    it("Should Return 0 if 0+0 Test Happy Flow!",()=>{
       expect(addition(0,0)).toEqual(0);
    });
    it("Should Return 30 if 10+20 Test Happy Flow!",()=>{
        expect(addition(10,20)).toEqual(30);
     });
     //test for negative 
    //  it("Should Return 30 if 10+20 Test Happy Flow!",()=>{
    //     expect(addition(10,20)).toEqual(10);
    //  });
});
describe("The Substraction Suit!",()=>{
    it("Should Return 0 if 0-0 Test Happy Flow!",()=>{
       expect(substraction(0,0)).toEqual(0);
    });
    it("Should Return 10 if 10-20 Test Happy Flow!",()=>{
        expect(substraction(10,10)).toEqual(0);
     });
     //test for negative 
     it("Should Return 10 if 10-20 Test Happy Flow!",()=>{
        expect(substraction(10,20)).toEqual(10);
     });
})