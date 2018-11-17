import { MyComponent } from './my2.component';

describe("Users Suit!",()=>{
    it("Hello John! Happy to see you!",()=>{
      let mycomp = new MyComponent();
      expect(mycomp.concatStr("John")).toEqual("Hello John !")
      expect(mycomp.getUsers()).toContain("John ")
      expect(mycomp.getUsers()).toContain(" Sam ")
      expect(mycomp.getUsers()).toContain("Mike ")
    });
  
  
     
})