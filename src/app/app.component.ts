import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from './shared/services/sidebar.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sidebarOpen: boolean = false;
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(
    private translate: TranslateService,
    private sidebarService: SidebarService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  // TODO -> Change sidenav name
  public ngOnInit(): void {
    this.sidebarService.setSidenav(this.sidenav);
  }
}
