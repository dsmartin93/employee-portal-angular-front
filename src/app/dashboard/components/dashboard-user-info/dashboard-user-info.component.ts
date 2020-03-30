import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-dashboard-user-info',
  templateUrl: './dashboard-user-info.component.html',
  styleUrls: ['./dashboard-user-info.component.scss']
})
export class DashboardUserInfoComponent implements OnInit {

  public user: any;

  constructor(
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.user = this.userService.user;

  }

}
