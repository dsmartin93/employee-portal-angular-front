import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static sessionDuration: number = 2000000;
  private token: string = null;
  private expiration: moment.Moment = null;
  private userAuthorzed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {

    // TODO -> Add local storage service;
    const aux = localStorage.getItem('jwt');
    if (aux && (location.href.indexOf('/login'))) {
      this.token = aux;
      this.userAuthorzed.next(this.token !== null);
    }
  }

  public getToken(): string {
    return this.token;
  }

  // TODO -> Check tslint variable name rules.
  public setToken(_token: string, _expiration?: moment.Moment): void {
    this.token = _token;
    this.expiration = _expiration;
    localStorage.setItem('jwt', _token);
    this.userAuthorzed.next(true);
  }

  public deleteToken(): void {
    this.token = null;
    this.expiration = null;
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('contracts');
    this.userAuthorzed.next(false);
  }

  public isAuth(): boolean {
    return this.token !== null;
  }

  public getUserAuthorized(): Observable<boolean> {
    return this.userAuthorzed;
  }





}
