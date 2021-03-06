import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PizzaComponent} from './pizza.component';
import { BurgerComponent } from './burger.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertiesComponent } from './properties/properties.component';
import { PizzaService } from './services/pizza.service';



@NgModule({
  declarations: [
    AppComponent, PizzaComponent,
    BurgerComponent, IceCreamComponent,
    HeaderComponent, FooterComponent,
    LoginComponent, RegisterComponent,
    HomeComponent, NavigationComponent,
    NotFoundComponent,
    PropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
