import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: any;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.user = this.getUser();
  }

  private getUser(): any {
    return this.localStorageService.getUser();
  }


}
