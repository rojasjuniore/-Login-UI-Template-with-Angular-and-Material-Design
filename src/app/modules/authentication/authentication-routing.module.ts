import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from "../../shared/shared.module";


const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LogInComponent,
        data: { title: 'log in' }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    SharedModule,
  ]
})
export class AuthenticationRoutingModule { }
