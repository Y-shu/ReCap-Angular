import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  app: string = 'Learning ANGULAR!';
  email:string = 'Yashu@gmail.com';
  data1:string="Hello You!"
    //instatiating PizzaService class
    // pizza = new PizzaService();
    // data= this.pizza.getPizza();
  // pizza = [{
  //   name:"Cheesa Pizza",
  //   size:"M"
  // },{
  //   name:"Chilly Pizza",
  //   size:"L"
  // },{
  //   name:"Chilly Cheesa Pizza",
  //   size:"XL"
  // }]
  data=[];
  constructor(public pizzaSrv:PizzaService) { 
    this.data=pizzaSrv.getPizza();
  }

  ngOnInit() {
  }
 showApp() {
   return this.app;
 }
 getData(data){
   console.log(data.value);
   }
   ChangeUserName($event){
     console.log($event);
     console.log($event.target.value);

     
   }
   changeData(value){
     this.data1=value;
     console.log(this.data1);
     
   }
 

}
