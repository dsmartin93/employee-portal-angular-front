import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ResponseInterceptor } from 'angular-in-memory-web-api';
import test from './test/test.mocks';
@Injectable({
  providedIn: 'root'
})
export class MocksDataService {

  constructor() { }

  public responseInterceptor(response: any, request: Request): ResponseInterceptor {
    if (request.url.startsWith(environment.api.apiUrl + '/TEST')) {
      return test(response, request);
    }
    return response;
  }


  public createDb(): any {
    return {
      TEST: []
    };
  }
}

