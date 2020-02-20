import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './components/debug/debug.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    DebugComponent
  ],
  imports: [
    CommonModule,
    DebugRoutingModule,
    HttpClientModule,
    NgxJsonViewerModule
  ]
})
export class DebugModule { }
