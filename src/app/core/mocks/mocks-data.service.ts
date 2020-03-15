import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ResponseInterceptor } from 'angular-in-memory-web-api';
import test from './test/test.mocks';
import accessControl from './access-control/access-control.mock';
@Injectable({
  providedIn: 'root'
})
export class MocksDataService {

  constructor() { }

  public responseInterceptor(response: any, request: Request): ResponseInterceptor {
    if (request.url.startsWith(environment.api.apiUrl + '/TEST')) {
      return test(response, request);
    } else if (request.url.startsWith(environment.api.apiUrl + '/ac')) {
      return accessControl(response, request);
    }
    return response;
  }


  public createDb(): any {
    return {
      TEST: [],
      ac: [],
    };
  }
}

