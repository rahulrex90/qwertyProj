import { Routes } from '@angular/router';
import { CityComponent } from 'src/app/pages/city/city.component';
import { CountryComponent } from 'src/app/pages/country/country.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { OrderComponent } from 'src/app/pages/order/order.component';


export const LandingPageRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'order',      component: OrderComponent },
    { path: 'city',      component: CityComponent },
    { path: 'country',      component: CountryComponent }
    
];
