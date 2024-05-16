import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: LandingPageComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layout/landing-page/landing-page.module').then(x => x.LandingPageModule)
  }]
},
  {
    path: 'login',
    component:LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
