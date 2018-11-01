import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.css']
})
export class IceCreamComponent {
  ice:string[]=['Cheese Pizza','Butter Pizza','Chilly Pizza'];
  iceShop='Pizza House';

  constructor() { }

  ngOnInit() {
  }

}
