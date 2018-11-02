import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from '../properties.component';
import { CarsComponent } from '../cars/cars.component';
import { BikesComponent } from '../bikes/bikes.component';
import { HousesComponent } from '../houses/houses.component';
const propertiesroutes: Routes =
[

{path: 'properties' , component: PropertiesComponent,
 children: [
   {
  path: 'properties/cars', component: CarsComponent
}, {
  path: 'properties/bikes', component: BikesComponent
},  {
  path: 'properties/houses', component: HousesComponent
}]
}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(propertiesroutes)
  ],
  declarations: [ CarsComponent,
    BikesComponent,
    HousesComponent],
    exports: [ RouterModule ]
})
export class PropertiesModule { }
