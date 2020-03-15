import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userId: string;
  public user: any;

  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private httpClient: HttpClient
  ) {
    this.initUser();
  }

  public initUser(): void {
    this.userId = this.localStorageService.getUser().id;
    this.getUserInfo(this.userId)
      .subscribe(
        (res) => {
          this.user = res;
        },
        (err) => {
          console.error(err);
        }
      );

  }

  private getUserInfo(userId: string): Observable<any> {
    return this.httpClient.get<any>(`${ this.apiService.getApi('get-user-info') }${ this.userId }`);
  }


}
