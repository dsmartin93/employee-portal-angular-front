import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info-education',
  templateUrl: './profile-info-education.component.html',
  styleUrls: ['./profile-info-education.component.scss']
})
export class ProfileInfoEducationComponent implements OnInit {

  @Input() public user: any;

  constructor() { }

  public ngOnInit(): void {
  }

}
