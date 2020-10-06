import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AdvertisingComponent } from './pages/advertising/advertising.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'myDashboard',
        component: MyDashboardComponent,
        data: { title: 'MyDashboard' }
      },
      { path: 'reports', component: ReportsComponent, data: { title: 'Reports' } },
      { path: 'advertising', component: AdvertisingComponent, data: { title: 'Advertising' } },
      { path: 'packages', component: PackagesComponent, data: { title: 'Packages' } },
      { path: 'users', component: UsersComponent, data: { title: 'Users' } },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
