import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info-personal',
  templateUrl: './profile-info-personal.component.html',
  styleUrls: ['./profile-info-personal.component.scss']
})
export class ProfileInfoPersonalComponent implements OnInit {

  @Input() public user: any;

  constructor() { }

  public ngOnInit(): void {
  }

}
