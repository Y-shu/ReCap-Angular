import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  app: string = 'Learning ANGULAR!';
  email:string = 'Yashu@gmail.com';
  pizza = [{
    name:"Cheesa Pizza",
    size:"M"
  },{
    name:"Chilly Pizza",
    size:"L"
  },{
    name:"Chilly Cheesa Pizza",
    size:"XL"
  }]
  constructor() { }

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

}
