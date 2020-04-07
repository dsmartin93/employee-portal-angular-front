import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public user: any;
  constructor(
    private userProfileService: UserProfileService
  ) { }

  public ngOnInit(): void {
    this.userProfileService.getProfileInfo();
    this.user = this.userProfileService.user;
  }

}
