import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public user: any = {};
  private profileInfoSubscription: any;

  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient
  ) { }

  public getProfileInfo(): any {
    return this.httpClient.get<any>(this.apiService.getApi('get-profile-info')).
      pipe(
        map(
          (res) => {
            this.user = res;
            return this.user;
          }
        )
      );
  }

  public getProfileInfoSubscription(): Observable<any> {
    if (!this.profileInfoSubscription) {
      this.profileInfoSubscription = this.getProfileInfo();
    }
    return this.profileInfoSubscription
  }

}
