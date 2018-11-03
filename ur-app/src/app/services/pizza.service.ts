export class PizzaService{
    private pizza = [{
        name:"Cheesa Pizza",
        size:"M"
      },{
        name:"Chilly Pizza",
        size:"L"
      },{
        name:"Chilly Cheesa Pizza",
        size:"XL"
      }]
    public getPizza(){
        return this.pizza;
    }
}