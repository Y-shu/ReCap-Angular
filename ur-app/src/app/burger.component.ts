import {Component} from '@angular/core';
import { template } from '@angular/core/src/render3';
@Component({
    selector:'app-burger',
    template:`<h1>Welcome To Burger {{burgerShop}}</h1>
    <h4>We Serve Greatest Burger in the world</h4>`,
})
export class BurgerComponent{
    burger:string[]=['Cheese burger','Butter burger','Chilly burger'];
    burgershop='Burger Queen';
    makeBurger():string{
        return this.burger[0];
    }

}