import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'myDashboard', component: MyDashboardComponent },
      { path: 'reports', component: ReportsComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
