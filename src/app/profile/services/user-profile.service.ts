import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public user: any = {};

  constructor() { }

  public getProfileInfo(): void {
    this.user = {
      basic: {
        name: 'placeholderName',
        surname1: 'placeholderSurname1',
        surname2: 'placeholderSurname2'
      },
      contact: {
        email: 'email@test.com',
        phone: '645266447'
      }
    };
  }
}
