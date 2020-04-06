import { MocksDataService } from './mocks/mocks-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawerMenuComponent } from './component/mat-drawer-menu/mat-drawer-menu.component';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MatDrawerMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(
      MocksDataService, {
      delay: 1000,
      passThruUnknownUrl: true
    }),
    RouterModule,
    TranslateModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    MatDrawerMenuComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
