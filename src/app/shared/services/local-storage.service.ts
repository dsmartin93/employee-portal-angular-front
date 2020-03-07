import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  /*
  * JWT TOKEN LOCAL STORAGE
  */
  public setJwtToken(_token): void {
    localStorage.setItem('jwt', _token);
  }
  public getJwtToken(): string {
    return localStorage.getItem('jwt');
  }

  public deleteJwdToken(): void {
    localStorage.removeItem('jwt');
  }

  /*
   * USER LOCAL STORAGE
   */
  public setUser(_token): void {
    localStorage.setItem('user', _token);
  }

  // TODO -> Check user type;
  public getUser(): any {
    return localStorage.getItem('user');
  }

  public deleteUser(): void {
    localStorage.removeItem('user');
  }



}
