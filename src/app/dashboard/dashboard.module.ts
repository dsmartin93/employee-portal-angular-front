import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardUserInfoComponent } from './components/dashboard-user-info/dashboard-user-info.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [DashboardComponent, DashboardUserInfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxJsonViewerModule
  ]
})
export class DashboardModule { }
