import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  constructor(
    private userProfileService: UserProfileService
  ) { }

  public ngOnInit(): void {
    this.userProfileService.getProfileInfo();
  }

}
