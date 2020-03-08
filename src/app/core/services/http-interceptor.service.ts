import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  private lastHttpCode: number;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token: string = this.authService.getToken();
    if (token !== null) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${ token }`)
      });
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }
    return next.handle(request).pipe(
      tap(
        (response: HttpResponse<any>) => {
          this.lastHttpCode = response.status;
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if ((token !== null) && (err.status === 401) && (this.lastHttpCode !== 401)) {
              this.lastHttpCode = err.status;
            }
          }

          this.authService.deleteToken();
          this.router.navigate(['/']);
        }
      )
    );

  }
}

