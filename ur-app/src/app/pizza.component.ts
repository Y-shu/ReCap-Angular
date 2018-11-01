import {Component} from '@angular/core';
import { template } from '@angular/core/src/render3';
@Component({
    selector:'app-pizza',
    template:`<h1>Welcome To Pizza {{pizzaShop}}</h1>
    <h4>We Serve Greatest Pizza in the world</h4>
    <h6>First Pizza::{{makePizza()}}</h6>`,
    styles:['h1 {color:brown;}']
})
export class PizzaComponent{
    pizza:string[]=['Cheese Pizza','Butter Pizza','Chilly Pizza'];
    pizzaShop='Pizza House';
    makePizza():string{
        return this.pizza[0];
    }

}
