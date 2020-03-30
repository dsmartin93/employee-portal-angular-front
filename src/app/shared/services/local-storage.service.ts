import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  /*
  * JWT TOKEN LOCAL STORAGE
  */
  public setJwtToken(token: string): void {
    localStorage.setItem('jwt', token);
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
  public setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // TODO -> Check user type;
  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  public deleteUser(): void {
    localStorage.removeItem('user');
  }



}
