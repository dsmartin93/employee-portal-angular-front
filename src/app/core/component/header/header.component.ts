import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuth: boolean;
  public pathLogo: string = 'assets/images/logo.png';

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidebarService: SidebarService
  ) { }

  public ngOnInit(): void {

    this.authService.getUserAuthorized()
      .subscribe(
        (res) => {
          this.isAuth = res;
        },
        (err) => {
          console.error(err);
        });
  }

  public logout(): void {
    this.authService.deleteAuthData();
    this.router.navigate(['/login']);
  }

  public toggleSidenav(): void {
    this.sidebarService.toggle();
  }
}
