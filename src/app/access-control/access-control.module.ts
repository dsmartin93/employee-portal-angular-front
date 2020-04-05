import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlComponent } from './components/access-control/access-control.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccessControlComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessControlRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    SharedModule

  ]
})
export class AccessControlModule { }
