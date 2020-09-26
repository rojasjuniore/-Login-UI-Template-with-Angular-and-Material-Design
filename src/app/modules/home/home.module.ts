import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { AngularMaterialModule } from "../../angular-material.module";
import { SharedModule } from "../../shared/shared.module";
import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
  declarations: [HomeComponent, MyDashboardComponent, ReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    AngularMaterialModule,
   
  ]
})
export class HomeModule { }
