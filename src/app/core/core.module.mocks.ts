import { MocksDataService } from './mocks/mocks-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpInterceptorService } from './services/http-interceptor.service';



@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(
      MocksDataService, {
      delay: 1000,
      passThruUnknownUrl: true
    }
    )
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
