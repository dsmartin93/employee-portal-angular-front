import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessControlComponent } from './components/access-control/access-control.component';
import { NotAuthGuard } from '../core/guards/not-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AccessControlComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard],

      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessControlRoutingModule { }
