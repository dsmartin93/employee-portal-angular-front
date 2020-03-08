import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Observable } from 'rxjs';
import { AccessControlUserModel } from './../models/access-control-user.model';
import { LoginModel } from './../models/login.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginModel: LoginModel;
  public loggedUser: AccessControlUserModel;

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public login(userEmail: string, userPassword: string): Observable<HttpResponse<AccessControlUserModel>> {
    this.loginModel = {
      email: userEmail,
      password: userPassword
    };
    return this.httpClient.post<any>(this.apiService.getApi('login'), this.loginModel, { observe: 'response' }
    );
  }

  public setAuthToken(token: string): void {
    this.authService.setToken(token);
  }

  public setAuthUser(user: any): void {
    this.authService.setUser(user);
  }



}
