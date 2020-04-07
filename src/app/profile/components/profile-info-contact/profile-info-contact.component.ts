import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info-contact',
  templateUrl: './profile-info-contact.component.html',
  styleUrls: ['./profile-info-contact.component.scss']
})
export class ProfileInfoContactComponent implements OnInit {

  @Input() public user: any;

  constructor() { }

  public ngOnInit(): void {


  }
}
