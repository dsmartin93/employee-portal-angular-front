import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private user: any;

  constructor() { }

  public getProfileInfo(): void {
    this.user = {
      name: 'placeholderName',
      surname1: 'placeholderSurname1',
      surname2: 'placeholderSurname2'
    }
  }
}
