import { Observable } from 'rxjs';
import { AccessControlUserModel } from './../models/access-control-user.model';
import { environment } from './../../../environments/environment.prod';
import { LoginModel } from './../models/login.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginModel: LoginModel;
  public loggedUser: AccessControlUserModel;

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(userEmail: string, userPassword: string): Observable<HttpResponse<AccessControlUserModel>> {
    this.loginModel = {
      email: userEmail,
      password: userPassword
    };
    return this.httpClient.post<any>(
      `${ environment.api.apiUrl }/access-control/login`, this.loginModel, { observe: 'response' }
    );
  }


}