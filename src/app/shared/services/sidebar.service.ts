import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidenav: MatSidenav = null;
  constructor() { }

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    if (!this.sidenav) {
      return;
    }
    this.sidenav.toggle();
  }

  public open(): void {
    if (!this.sidenav) {
      return;
    }
    this.sidenav.open();
  }

  public close(): void {
    if (!this.sidenav) {
      return;
    }
    this.sidenav.close();
  }
}
