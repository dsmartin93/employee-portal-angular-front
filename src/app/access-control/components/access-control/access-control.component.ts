import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    if (this.authService.isAuth()) {
      this.router.navigate(['/dashboard']);
    } else if (this.router.url === '/') {
      this.router.navigate(['login']);
    }
  }



}
