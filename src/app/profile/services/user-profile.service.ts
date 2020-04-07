import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Subscription, Observable, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public user: any = {};
  public userID: string;
  private profileInfoObservable: Subject<any>;

  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.userID = localStorageService.getUser().id;
    this.getProfileInfo();
  }

  public getProfileInfo(): any {
    return this.httpClient.get<any>(`${ this.apiService.getApi('get-profile-info') }${ this.userID }`).
      pipe(
        map(
          (res) => {
            this.user = res;
            return this.user;
          }
        )
      );
  }

  public getProfileInfoObservable(): Observable<any> {
    if (!this.profileInfoObservable) {
      this.profileInfoObservable = this.getProfileInfo();
    }
    return this.profileInfoObservable;
  }

}
