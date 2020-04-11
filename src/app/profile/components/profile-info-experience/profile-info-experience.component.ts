import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info-experience',
  templateUrl: './profile-info-experience.component.html',
  styleUrls: ['./profile-info-experience.component.scss']
})
export class ProfileInfoExperienceComponent implements OnInit {

  @Input() public user: any;


  constructor() { }

  public ngOnInit(): void {
  }

}
