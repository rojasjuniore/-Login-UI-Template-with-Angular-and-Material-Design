import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { AngularMaterialModule } from "../../angular-material.module";
import { ReportsComponent } from './pages/reports/reports.component';
import { AdvertisingComponent } from './pages/advertising/advertising.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { UsersComponent } from './pages/users/users.component';
import { TestModalComponent } from './components/test-modal/test-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    MyDashboardComponent,
    ReportsComponent,
    AdvertisingComponent,
    PackagesComponent,
    UsersComponent,
    TestModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    AngularMaterialModule,

  ]
})
export class HomeModule { }
