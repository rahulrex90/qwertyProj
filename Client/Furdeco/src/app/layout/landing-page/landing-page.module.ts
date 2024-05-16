import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageRoutes } from './landing-page.routing';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';




@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingPageRoutes),
  ]
})
export class LandingPageModule { }
