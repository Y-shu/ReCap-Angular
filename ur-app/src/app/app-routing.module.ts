import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PizzaComponent } from './pizza.component';
import { BurgerComponent } from './burger.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertiesComponent } from './properties/properties.component';
import { CarsComponent } from './properties/cars/cars.component';
import { BikesComponent } from './properties/bikes/bikes.component';
import { HousesComponent } from './properties/houses/houses.component';
import {PropertiesModule} from './properties/properties/properties.module';

const routes: Routes = [{
  path: 'home', component: HomeComponent
}, {
   path: 'login', component: LoginComponent
}, {
   path: 'register', component: RegisterComponent
}, {
  path: 'pizza', component: PizzaComponent
}, {
  path: 'burger', component: BurgerComponent
}, {
   path: '**', component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
