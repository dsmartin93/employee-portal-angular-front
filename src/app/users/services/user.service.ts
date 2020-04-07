import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userId: string;
  public user: any;
  public userObservable: Subject<any> = null;


  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.userId = this.localStorageService.getUser().id;
    this.initUser();
  }

  public initUser(): void {
    if (this.authService.isAuth()) {
      this.getUserInfo()
        .subscribe(
          (res) => {
            this.user = res;
          },
          (err) => {
            console.error(err);
          }
        );

    }
  }

  private getUserInfo(): any {
    const userObs = this.httpClient.get<any>(`${ this.apiService.getApi('get-user-info') }${ this.userId }`)
      .pipe(
        map(
          (res) => {
            return res;
          }
        )
      );
    return userObs;
  }

  public getUserObservable(): any {
    if (!this.userObservable) {
      this.userObservable = this.getUserInfo();
    }
    return this.userObservable;
  }


}
