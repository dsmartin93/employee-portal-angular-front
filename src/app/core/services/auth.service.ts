import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static sessionDuration: number = 2000000;
  private token: string = null;
  private expiration: moment.Moment = null;
  private userAuthorzed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private localStorageService: LocalStorageService
  ) {
    const aux = localStorageService.getJwtToken();
    if (aux && (location.href.indexOf('/login'))) {
      this.token = aux;
      this.userAuthorzed.next(this.token !== null);
    }
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string, expiration?: moment.Moment): void {
    this.token = token;
    this.expiration = expiration;
    this.localStorageService.setJwtToken(token);
    this.userAuthorzed.next(true);
  }

  public deleteAuthData(): void {
    this.token = null;
    this.expiration = null;
    this.localStorageService.deleteJwdToken();
    this.localStorageService.deleteUser();
    this.userAuthorzed.next(false);
  }

  public getUser(): any {
    return this.localStorageService.getUser();
  }

  public setUser(user: any): void {
    this.localStorageService.setUser(user);
  }

  public isAuth(): boolean {
    return this.token !== null;
  }

  public getUserAuthorized(): Observable<boolean> {
    return this.userAuthorzed;
  }

}
