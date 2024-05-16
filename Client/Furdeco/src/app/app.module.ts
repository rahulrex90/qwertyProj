import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { OrderComponent } from './pages/order/order.component';
import { CityComponent } from './pages/city/city.component';
import { CountryComponent } from './pages/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    SidemenuComponent,
    OrderComponent,
    CityComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
