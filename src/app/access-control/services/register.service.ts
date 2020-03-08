import { LocalStorageService } from './../../shared/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { LoginModel } from './../models/login.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { AccessControlUserModel } from '../models/access-control-user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public registerModel: LoginModel;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) { }

  public register(userEmail: string, userPassword: string): Observable<HttpResponse<AccessControlUserModel>> {
    this.registerModel = {
      email: userEmail,
      password: userPassword
    };
    return this.httpClient.post<any>(
      `${ environment.api.apiUrl }/access-control/register`, this.registerModel, { observe: 'response' }
    );
  }
}
