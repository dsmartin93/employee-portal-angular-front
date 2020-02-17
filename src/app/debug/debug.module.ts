import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './components/debug/debug.component';


@NgModule({
  declarations: [
    DebugComponent
  ],
  imports: [
    CommonModule,
    DebugRoutingModule,
  ]
})
export class DebugModule { }
