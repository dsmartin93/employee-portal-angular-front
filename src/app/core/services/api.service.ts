import { response } from 'express';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: Map<string, string> = new Map();

  constructor() {
    this.initApi();
  }

  private initApi(): void {

    // TEST
    this.api.set('test_service', '/TEST/TEST_SERVICE');

    // ACCESS CONTROL 
    this.api.set('login', '/ac/login');
    this.api.set('register', '/ac/register');

    // USER
    this.api.set('get-user-info', '/user/get-user-info/');

  }

  public getApi(id: string, params?: Array<string>): string {
    let url = null;
    if (this.api.has(id)) {
      url = environment.api.apiUrl + this.api.get(id);
      if (params) {
        params.forEach((value, i) => {
          url = url.replace(`{${ i }}`, value);
        });
      }
    }
    return url;
  }


}
