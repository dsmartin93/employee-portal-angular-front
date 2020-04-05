import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SpinnerComponent]
  ,
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
