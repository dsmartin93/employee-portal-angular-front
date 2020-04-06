import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public user: any = {};

  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient
  ) { }

  public getProfileInfo(): any {

    return this.httpClient.get<any>(this.apiService.getApi('get-profile-info')).subscribe(
      (res) => {
        this.user = res;
      },
      ((err) => {
        console.error(err);
      })
    );
  }

}
